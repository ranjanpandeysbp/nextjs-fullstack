"use client"

import {HiOutlineTrash} from "react-icons/hi"
import { useRouter } from "next/navigation";

const DeleteButton = ({id}) => {

  const router = useRouter();
  const deleteItem = async ()=>{
    const isConfirm = confirm("Are you sure to delete the item?");
    if(isConfirm){
      const response = await fetch(`http://localhost:3000/api/items?id=${id}`, {
        method: "DELETE"
      });
      if(response.ok){
        router.refresh();
      }
    }
  }
  return (
    <button onClick={deleteItem} className="text-red-500">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default DeleteButton