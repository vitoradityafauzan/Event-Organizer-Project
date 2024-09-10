
import { EventController } from '@/controllers/event.controller';
import { uploader } from '@/middlewares/uploader';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEvents);
    
    this.router.post('/',
      uploader('event-', '/event').single('image'),
      // 
      this.eventController.createEvents
    )

    // this.router.post('/', this.eventController.createEvents)
  }

  getRouter(): Router {
    return this.router;
  }
}
