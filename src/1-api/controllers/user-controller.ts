import { JsonController, Param, Body, Get, Post, Put, Delete, Authorized, UseInterceptor } from "routing-controllers";
import { Role, User, IUserManager } from '../../3-domain/domain-module';
import * as express from 'express';
import { dependcies } from '../../5-cross-cutting/cross-cutting.module';
import { Inject, Container } from 'typedi';
import { IUserModel } from '../models/models.module';
import { ToModelInterceptor } from '../utils/interceptors/model-interceptor';
import { AuthorizationProvider } from '../authorization/authorization-provider';
@JsonController()
export class UserController {

    @Inject(dependcies.UserManager)
    private userManager: IUserManager;

    @Post('/register')
    register( @Body() user: User) {
        return new Promise((resolve, reject) => {

            this.userManager.registerUser(user).then((result: User) => {
                resolve({
                    user: result.toModel(),
                    authorization: AuthorizationProvider.generateToken(user)
                })
            }).catch((error: Error) => reject(error));
        });
    }

    @Post("/login")
    login( @Body() user: User) {
        return new Promise<any>((resolve, reject) => {

            this.userManager.validateUser(user).then(isValid => {
                resolve(AuthorizationProvider.generateToken(user));
            }).catch((error: Error) => reject(error));

        });
    }

    @Post("/validateToken")
    @Authorized()
    validateToken(@Body() token: string){
        return 'aaa'
    }
    


}