import mongoose, { model, Schema } from "mongoose";
import { guardian } from "../types/guardian.type";

const guardianSchema: Schema<guardian> = new Schema({
    userid: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    contact: String,
    imahepath: String,
    relationship: String,
})

const Guardian = model('Guardian', guardianSchema)

export default Guardian