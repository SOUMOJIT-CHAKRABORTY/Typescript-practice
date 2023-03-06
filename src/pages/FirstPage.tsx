import { BiCommentAdd } from "react-icons/bi";

function FirstPage() {
  return (
    <div className="item-center justify-center ">
    <button className="flex flex-row item-center p-3 justify-center mt-10 cursor-pointer  hover:bg-slate-600 mx-auto rounded-xl active:bg-slate-700">
      <BiCommentAdd className="text-4xl "/>
      <h1 className="font-bold text-lg"> Add Todo</h1>
    </button>

    <div className="flex justify-center items-center ">

        <input name="todotitle" placeholder="title" type="text" className="border border-slate-500 rounded-md py-1 px-4 "/>
        <button className="ml-1 bg-blue-700 px-3 py-1 rounded-lg text-white" >Add</button>

    </div>
    </div>
  );
}

export default FirstPage;
