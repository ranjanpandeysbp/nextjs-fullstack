"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const EditItemComponent = ({id, title, description}) => {

  const router = useRouter();
  const[newTitle, setNewTitle] = useState(title);
  const[newDescription, setNewDescription] = useState(description);

  const handleUpdate = async (event)=>{
    event.preventDefault();
    if(!newTitle){
      alert("Title is required");
      return;
    }
    if(!newDescription){
      alert("Description is required");
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({newTitle, newDescription})
      });
      if(response.ok){
        router.refresh();
        router.push("/");
      }else{
        throw new Error("Error occurred while updating item");
      }
    } catch (error) {
      console.log("Error occurred while updating item: ", error);
    }
  }
  return (
    <div>
        <form onSubmit={handleUpdate} className="flex flex-col mt-2 gap-3">
            <input type="text"
            onChange={(e)=>setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-orange-500 px-7 py-2"
            placeholder="Enter item title" />
            <input type="text"
            onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-orange-500 px-7 py-2"
            placeholder="Enter item description" />
            <button type="submit" className="bg-slate-700 font-bold text-white px-7 py-2 w-fit">
                Update
            </button>
        </form>
    </div>
  )
}

export default EditItemComponent