import { Model } from "mongoose";
import { IStudentModel } from "./student";

export class Models {
  student: Model<IStudentModel>;
}