import { Request, Response } from 'express';
import prisma from '../prisma';
import { format, formatISO, isMatch } from 'date-fns';

export class EventController {
  async getEvents(req: Request, res: Response) {
    try {
      //   const { search } = req.query;
      //   let filter: Prisma.EventWhereInput = {};

      //   if (search) {
      //     filter.name = { contains: search as string };
      //   }

      //   const events = await prisma.event.findMany({
      //     where: filter,
      //     include: { user: true },
      //   });

      const events = await prisma.event.findMany({
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

      const link = `http://localhost:8000/api/event/${req?.file?.filename}`;

      const { name, slug, desc, startDate, endDate } = req.body;

      if (
        !isMatch(req.body.startDate, 'yyyy-MM-dd, HH:mm:ss') &&
        !isMatch(req.body.startDate, 'yyyy-MM-dd, HH:mm:ss')
      ) throw "Date And/Or Time Format Is Incorrect!";

      const locationn = parseInt(req.body.locationId);
      const pricee = parseInt(req.body.price);
      const amountt = parseInt(req.body.price);
      const category = parseInt(req.body.categoryId);
      const organizer = parseInt(req.body.organizerId);

      console.log(locationn, ' ', startDate, ' ', endDate, 'dsds');

      const findOccupied: { name: string }[] = await prisma.$queryRawUnsafe(
        `SELECT name FROM event WHERE locationId = ${locationn} AND (startDate >= "${startDate}" AND endDate <= "${endDate}");`,
      );

      if (findOccupied[0].name == undefined || findOccupied.length == 0)
        throw 'An Event Already Set At Selected Location And Time!';

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
