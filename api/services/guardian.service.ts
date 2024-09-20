import mongoose from "mongoose"
import Guardian from "../models/guardian.model"
import { guardian } from "../types/guardian.type"

export const add = async (dataObject: Object) => {
    const newGuardian = new Guardian(dataObject)
    const savedGuardian = await newGuardian.save()
    return savedGuardian
}

export const update =  async ( dataObject: guardian ) => {
    const updateGuardian = await Guardian.findByIdAndUpdate( 
        dataObject.id,
        dataObject,
        {new: true},
    )
    return updateGuardian
}


export const deletes =  async ( id: string ) => {
    const deleteGuardian = await Guardian.findByIdAndDelete({_id: id})
    return deleteGuardian
}


export const reads =  async ( id: string ) => {
    const Guardians = await Guardian.find({_id: id})
    return Guardians
}

