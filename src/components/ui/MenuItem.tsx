import Button from "../common/Button";

interface MenuItemProps {
  name: string;
  description?: string; // Optional description
  imageUrl?: string; // Optional image URL
}
export default function MenuItem({
  name,
  description,
  imageUrl,
}: MenuItemProps) {
  return (
    <div className="p-2 m-2 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between items-center h-64 w-64 transition duration-300 ease-in-out hover:scale-105">
      <h1 className="text-lg p-2 font-semibold uppercase mb-2 text-gray-800 underline decoration-gray-300">
        {name}
      </h1>
      <p className="text-sm text-gray-600 p-2 line-clamp-3">{description}</p>
    <img src={imageUrl} height={100} width={100}></img>
      <Button className="rounded-lg" clicked={()=>{console.log("clicked item in menu")}}>Add To cart</Button>
    </div>
  );
}
