import { Schema } from "mongoose";

export var studentSchema: Schema = new Schema({
  name: String,
  address: String
});
// userSchema.pre("save", function(next) {
//   if (!this.createdAt) {
//     this.createdAt = new Date();
//   }
//   next();
// });