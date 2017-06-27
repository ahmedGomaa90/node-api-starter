import { Router, Request, Response, NextFunction } from 'express';
import { getDb, closeConnection } from '../data-access/connection-adapter';
const Heroes = require('../data');
import { model } from 'mongoose';
import * as crypto from 'crypto';
export class HeroRouter {
    router: Router

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * GET all Heroes.
     */
    public getAll(req: Request, res: Response, next: NextFunction) {
        let salt = crypto.randomBytes(128).toString('base64');
        let hash = crypto.pbkdf2Sync('asdasd123', salt, 1000, 512, 'sha512');
        let student = getDb().models.student;
        new student({
            name: "ahmed",
            address: "lolo"
        }).save().then(result => {
            //getDb().models.student.find((err, result) => {

            console.log('from router', result);
            res.setHeader('app', 'ahmed');
            //closeConnection().then(() => {
            res.send(result); 
            //});

            // });
        })

    }

    /**
     * GET one hero by id
     */
    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let hero = Heroes.find((hero: any) => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    hero
                });
        }
        else {
            res.status(404)
                .send({
                    message: 'No hero found with the given id.',
                    status: res.status
                });
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne)
    }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();
// const exporto = heroRoutes.router;
export default heroRoutes.router;
