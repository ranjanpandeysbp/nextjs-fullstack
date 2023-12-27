import Link from "next/link"
import DeleteButton from "./DeleteButton"
import {HiPencilAlt} from "react-icons/hi"

const getAllItems = async ()=>{
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/api/items`, {cache: "no-store"});
      if(!response.ok){
        throw new Error("Error occured while fetching all items");
      }
      return response.json();
    } catch (error) {
      console.log("Error while fetching items: ", error);
    }
}

const ItemList = async () => {
  const{items} = await getAllItems();
  return (
    <>
      {
        items.map((item)=>(
          <div key={item._id} className="p-4 border border-orange-500 my-2 
          flex justify-between items-start">
              <div>
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <div>{item.description}</div>
              </div>
              <div className="flex gap-2">
                  <DeleteButton id={item._id} />
                  <Link href={`/editItem/${item._id}`}>
                      <HiPencilAlt size={24} />
                  </Link>
              </div>
          </div>
        ))
      }
    </>
  );
}

export default ItemList