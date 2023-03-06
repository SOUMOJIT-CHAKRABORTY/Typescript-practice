import React from "react";
import { FaHome } from "react-icons/fa";

function FirstPage() {
  return (
    <div className=" items-center my-auto">
   <div className="flex items-center mt-5 justify-center">
    <FaHome className="text-3xl" />
    <h1 className="text-2xl">Add Todo</h1>
   </div>
   <div className="flex items-center mt-5 justify-center space-x-3">
   <input placeholder="Add a todo" className="text-center rounded-lg border border-gray-700 px-2 py-2" />
   <button className="bg-blue-700 px-4 rounded-lg text-lg text-white" >Add</button>
   </div>
    </div>
  );
}

export default FirstPage;
