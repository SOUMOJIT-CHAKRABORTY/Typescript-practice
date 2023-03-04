import React from "react";
import { IoAddCircleOutline } from "react-icons/io";

function FirstPage() {
  return (
    <div className="">
      <div className="bg-cover border border-black bg-center ">
        <img
          src="https://images.unsplash.com/photo-1634270874854-3c7492905b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHB1cnBsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          className="w-full h-[200px]"
        />
        <IoAddCircleOutline />
      </div>
    </div>
  );
}

export default FirstPage;
