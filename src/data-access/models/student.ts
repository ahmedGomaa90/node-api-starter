import { Document } from "mongoose";
import { IStudent } from '../../entities/interfaces/student'

export interface IStudentModel extends IStudent, Document {
  //custom methods for your model would be defined here
}