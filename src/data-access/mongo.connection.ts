import * as mongoose from 'mongoose';
import { Models } from "./models/model"; //import IModel
import { IStudentModel } from './models/student'
import { studentSchema } from '../entities/schemas/student-schema';
export class mongodbConfig {

  private connectionString = 'mongodb://localhost:27017/testdb';
  public connection: mongoose.Connection;
  models: Models;

  constructor() {
  }

  configure() {
    this.connection = mongoose.createConnection(this.connectionString);

    // var db = mongoose.connection;
    this.createModels();
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function () {
    //   // we're connected!
    // });
  }

  private createModels() {
    this.models = {
      student: this.connection.model<IStudentModel>("User", studentSchema)
    }
  }

  closeConnection(){
    console.log(this.connection.readyState);
    return this.connection.close();
  }
}