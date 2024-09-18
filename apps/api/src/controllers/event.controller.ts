import { Request, Response } from 'express';
import prisma from '../prisma';
import { format, formatISO, isMatch } from 'date-fns';
import { Prisma } from '@prisma/client';

const port = process.env.PORT;

// interface IEvent {
//   name: string;
//   slug: string;
//   desc: string;
//   image: string;
//   price: number;
//   amount: number;
//   locationId: number;
//   categoryId: number;
//   startDate: string;
//   endDate: string;
//   user: {
//     firstName: string;
//     lastName: string;
//     email: string;
//   };
//   category: {
//     idCategory: number;
//     name: string;
//   };
//   location: {
//     idLocation: number;
//     name: string;
//   };
// }

export class EventController {
  async getEvents(req: Request, res: Response) {
    try {
        const { search } = req.query;

        const filterCategory = req.query.category as string | undefined;
        const category = filterCategory ? parseInt(filterCategory, 10) : undefined;

        const filterLocation = req.query.location as string | undefined;
        const location = filterLocation ? parseInt(filterLocation, 10) : undefined;

        let filter: Prisma.EventWhereInput = {};

        if (search) {
          filter.name = { contains: search as string };
        }

        if (category || category != undefined) {
          filter.categoryId = category;
        }

        if (location || location != undefined) {
          filter.locationId = location;
        }

        const events = await prisma.event.findMany({
          where: filter,
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
              },
            },
            category: true,
            location: true,
          },
        });

      // const events = await prisma.event.findMany({
      //   include: {
      //     user: {
      //       select: {
      //         firstName: true,
      //         lastName: true,
      //         email: true,
      //       },
      //     },
      //     category: true,
      //     location: true,
      //   },
      // });

      res.status(200).send({
        status: 'ok',
        events,
      });
      //
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  async getCategoryLocation(req: Request, res: Response) {
    try {

      const category = await prisma.category.findMany();
  
      const location = await prisma.location.findMany();

      res.status(200).send({
            status: 'ok',
            category,
            location
          });
          //
        } catch (err) {
          res.status(400).send({
            status: 'error',
            msg: err,
          });
        }
      }

  async createEvents(req: Request, res: Response) {
    try {
      console.log('Checking image file ....');

      if (!req.file) throw 'Image File Not Uploaded';
      console.log('Past File Check');

      const link = `http://localhost:${port}/api/public/event/${req?.file?.filename}`;
      // const link = `${req?.file?.filename}`;

      const { name, slug, desc, startDate, endDate } = req.body;

      console.log('original date = -', req.body.startDate,'-');
      

      console.log('Checking date, ', isMatch(req.body.startDate, 'yyyy-MM-dd, HH:mm:ss'));
      

      if (
        !isMatch(req.body.startDate, 'yyyy-MM-dd, HH:mm:ss') &&
        !isMatch(req.body.endDate, 'yyyy-MM-dd, HH:mm:ss')
      ) throw "Date And/Or Time Format Is Incorrect!";

      const locationn = parseInt(req.body.locationId);
      const pricee = parseInt(req.body.price);
      const amountt = parseInt(req.body.price);
      const category = parseInt(req.body.categoryId);
      const organizer = parseInt(req.body.organizerId);

      console.log(locationn, ' ', startDate, ' ', endDate, 'dsds');

      const findOccupied: { name: string }[] = await prisma.$queryRawUnsafe(
        `SELECT name FROM event WHERE locationId = ${locationn} AND (startDate <= "${startDate}" AND endDate >= "${endDate}");`,
      );

      console.log('after find occupied');
      

      if (!findOccupied) {
        console.log('event occupied');
        
        throw 'An Event Already Set At Selected Location And Time!';
      }
        

      console.log('after if find occupied');
      

      const makeEvent = await prisma.event.create({
        data: {
          name,
          slug,
          desc,
          image: link,
          price: pricee,
          amount: amountt,
          startDate: formatISO(startDate),
          endDate: formatISO(endDate),
          locationId: locationn,
          categoryId: category,
          organizerId: organizer,
          // organizerId: req.user?id!
        },
      });

      res.status(201).send({
        status: 'ok',
        msg: 'event success post',
        makeEvent,
      });
      //
    } catch (err) {
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }
}
