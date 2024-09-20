import mongoose from "mongoose"

export type guardian = {
    id?: mongoose.Schema.Types.ObjectId,
    userid?: mongoose.Schema.Types.ObjectId,
    name?: string,
    email?: string,
    contact?: string,
    imahepath?: string,
    relationship?: string
}
