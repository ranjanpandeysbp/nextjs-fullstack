"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const AddItem = () => {
  const[title, setTitle] =  useState("");
  const[description, setDescription] =  useState("");
  const router = useRouter();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(!title){
      alert("Title is required");
      return;
    }
    if(!description){
      alert("Description is required");
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/items`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title, description})
      });
      if(response.ok){
        router.push("/");
      }else{
        throw new Error("Error occurred while creating new item");
      }
    } catch (error) {
      console.log("Error occurred while creating new item: ", error);
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col mt-2 gap-3">
            <input type="text" 
            onChange={(event)=>setTitle(event.target.value)}
            value={title}
            className="border border-orange-500 px-7 py-2"
            placeholder="Enter item title" />
            <input type="text"
            onChange={(event)=>setDescription(event.target.value)}
            value={description}
            className="border border-orange-500 px-7 py-2"
            placeholder="Enter item description" />
            <button type="submit" className="bg-slate-700 font-bold text-white px-7 py-2 w-fit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddItem