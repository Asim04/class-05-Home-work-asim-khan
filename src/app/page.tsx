

export default function Home() {
  return (
    <div >
     

      <div className="w-full h-60 bg-slate-600 flex justify-center">
        <div className="w-80 h-50 bg-yellow-500 my-5 mx-5 flex flex-col justify-center items-center rounded-md" >
          <h1 className="text-center p-4 text-xl">card 1</h1>
          <p className="text-center">This is my card</p>
          <button className="text-center bg-blue-800 px-4 py-2 rounded-md mt-1" >Learn mor</button>
        </div>
        <div className="w-80 h-50 bg-lime-500 my-5 mx-5 flex flex-col justify-center items-center">
          <h1 className="text-center p-4 text-xl">card 2</h1>
          <p className="text-center">This is my card</p>
          <button className="text-center bg-blue-800 px-4 py-2 rounded-md mt-1" >Learn mor</button>
        </div>
        <div className="w-80 h-50 bg-rose-900 my-5 mx-5 flex flex-col justify-center items-center">
          <h1 className="text-center p-4 text-xl">card 3</h1>
          <p className="text-center">This is my card</p>
          <button className="text-center bg-blue-800 px-4 py-2 rounded-md mt-1" >Learn mor</button>
        </div>
      </div>

      <div className="p-4 w-full h60 bg-slate-400 flex justify-center gap-4">
        <div className="w-96 h-40 bg-emerald-100"></div>
        <div className="w-96 h-40 bg-indigo-600"></div>
      </div>
      <div className="w-80 h-lvh p-5 flex" ><h1>Heading</h1></div>


    
      
    </div>
  );
}
