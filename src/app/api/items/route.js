import dbConnection from "@/db/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";
//create new item
export async function POST(request){
    const {title, description} = await request.json();
    await dbConnection();
    await Item.create({title, description});
    return NextResponse.json({msg: "Item created successfully"}, {status :201})
}
//get all items
export async function GET(){
    await dbConnection();
    const items = await Item.find();
    return NextResponse.json({items});
}
//delete an item with provided id, http://localhost:3000/api/items?id=658b42c5c7ea15792d9b9f7f
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await dbConnection();
    await Item.findByIdAndDelete(id);
    return NextResponse.json({msg: `Item with id ${id} was deleted successfully`}, {status :200})
}