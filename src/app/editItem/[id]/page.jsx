import EditItemComponent from '@/components/EditItemComponent'
import React from 'react';

//get details of an item
const getItemDetails = async (id)=>{
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/items/${id}`, {cache: "no-store"});
    if(!response.ok){
      throw new Error("Error occurred while getting Item Detail");
    }
    return response.json();
  } catch (error) {
    console.log("Error occurred while getting Item Detail: ", error);
  }
}

//context.params.id
const EditItem = async ({params}) => {
  const {id} = params;
  const {item} = await getItemDetails(id);
  const {title, description} = item;
  return (
    <EditItemComponent id={id} title={title} description={description}/>
  )
}

export default EditItem