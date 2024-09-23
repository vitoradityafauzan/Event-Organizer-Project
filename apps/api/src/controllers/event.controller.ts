import prisma from '@/prisma';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import multer = require('multer');

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export class EventController {
  // Metode lainnya...

  async createEvent(req: MulterRequest, res: Response) {
    try {
      if (!req.file) throw new Error('No file uploaded'); // Lebih baik gunakan Error object

      const link = `http://localhost:8000/api/public/event/${req.file.filename}`;

      const {
        firstName,
        lastName,
        price,
        location,
        description,
        isPaidEvent,
        availableSeats,
        organizerId,
        eventDate,
        eventTime, // Mengelola waktu terpisah
        sellEndDate, // Tanggal berakhir penjualan
        sellEndTime, // Waktu berakhir penjualan
      } = req.body;

      const eventDateTime = new Date(`${eventDate}T${eventTime}`);
      const sellEndDateTime = new Date(`${sellEndDate}T${sellEndTime}`);

      if (isPaidEvent === 'Paid' && (!price || isNaN(parseFloat(price)))) {
        throw new Error('Price must be provided for Paid events');
      }

      const eventData: Prisma.EventCreateInput = {
        firstName,
        lastName,
        location,
        description,
        isPaidEvent,
        availableSeats: parseInt(availableSeats),
        eventDate: new Date(eventDate),
        eventTime: eventDateTime,
        sellEndDate: new Date(sellEndDate),
        sellEndTime: sellEndDateTime,
        image: link,
        organizer: { connect: { idUser: parseInt(organizerId, 10) } },
      };

      if (isPaidEvent === 'Paid') {
        eventData.price = parseFloat(price);
      } else {
        eventData.price = 0;
      }

      const event = await prisma.event.create({
        data: eventData,
      });

      res.status(201).json({ event });
    } catch (err) {
      res.status(400).json({
        msg: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  }

  async getEvent(req: Request, res: Response) {
    try {
      const { search } = req.query;
      let filter: Prisma.EventWhereInput = {};

      if (search) {
        filter.firstName = { contains: search as string };
      }
      const events = await prisma.event.findMany({
        where: filter,
        include: { organizer: true },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).json({
        status: 'ok',
        event: events,
      });
    } catch (err) {
      res.status(400).json({
        msg: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  }

  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params; // Ambil ID dari parameter URL

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ msg: 'Invalid event ID' });
      }

      const event = await prisma.event.findUnique({
        where: { idEvent: Number(id) },
        include: { organizer: true }, // Sertakan informasi organizer jika diperlukan
      });

      if (!event) {
        return res.status(404).json({ msg: 'Event not found' });
      }

      res.status(200).json({ event });
    } catch (err) {
      res.status(400).json({
        msg: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  }
}
