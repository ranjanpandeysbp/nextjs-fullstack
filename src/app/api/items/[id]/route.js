
//http://localhost:3000/api/items/658b42c5c7ea15792d9b9f7f
import { NextResponse } from "next/server";
import dbConnection from "@/db/mongodb";
import Item from "@/models/item";

//update an item
//context.params.id
export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await dbConnection();
    await Item.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({msg: `Item with id ${id} was updated successfully`}, {status :200});
}

//get details of an item with provided id
export async function GET(request, {params}){
    const {id} = params;
    await dbConnection();
    const item = await Item.findOne({_id: id});
    return NextResponse.json({item}, {status :200});
}