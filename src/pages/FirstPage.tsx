import React from "react";
import { BiCommentAdd } from "react-icons/bi";

function FirstPage() {
  return (
    <div className="item-center justify-center ">
    <button className="flex flex-row item-center p-3 justify-center mt-10 cursor-pointer  hover:bg-slate-600 mx-auto rounded-xl active:bg-slate-700">
      <BiCommentAdd className="text-4xl "/>
      <h1 className="font-bold text-lg"> Add Todo</h1>
    </button>

    <div className=" justify-center mx-auto w-full md:w-[67%] lg:w-[40%] lg:ml-20 space-x-5">
      <form className="mx-auto p-6 flex flex-col justify-center ">
        <input name="todotitle" placeholder="title" type="text" className="border border-slate-500 mb-5 rounded-md py-1 px-4 w-[50%]"/>
        <textarea placeholder="Add details" />
      </form>
    </div>
    </div>
  );
}

export default FirstPage;
