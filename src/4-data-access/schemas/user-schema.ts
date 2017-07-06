import { Schema } from "mongoose";

export var userSchema: genericSchema = {
    schema: new Schema({
        username: { type: String, required: true },
        hashedPassword: { type: String, required: true },
        salt: { type: String, required: true },
        // roles: { type: Number, required: false }
    }),
    collectionName: 'users'
};

export interface genericSchema {
    schema: Schema;
    collectionName: string;
}