import { useState } from "react";

const App = () => {
  const [note, setNote] = useState();
  const [details, setDetails] = useState();

  const [task ,setTask] = useState([]);

  const HandleSubmit=()=>{
    // console.log(`adding Note : ${note}`)
    // console.log(`adding Details : ${details}`)
    const newtask = [...task];
    newtask.push({note,details}); 
    setTask(newtask);
    console.log(task)
    setNote('');
    setDetails('');
  }

  return (
    <div className="bg-black text-white h-screen flex lg:flex">
      <form className="flex flex-col gap-10 py-10 px-5 w-2/4 " onSubmit={(e) => {
        e.preventDefault();
        HandleSubmit()
      }}>
        <h1 className="text-4xl font-bold px-5">Add Notes</h1>
        <input type="text"
          placeholder="Enter the note"
          className="border-2 px-5 py-2 outline-cyan-200 "
          value={note} onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        
        <textarea type="text"
          placeholder="Enter the details.."
          className="border-2 px-5 py-10 outline-cyan-200 "
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-white text-black py-2 px-5 active:scale-95">Add Note</button>
      </form>
      <div className="border-l-2 pl-6 lg:pl-12 w-full">
        <h1 className="text-xl font-bold text-center py-6">Your notes</h1>

        <div className="flex  gap-4 pr-2 lg:pr-12">
        <div className="flex flex-wrap gap-4 overflow-hidden rounded-2xl ">{task.map((e,idx)=>{
          return <div key={idx} className="bg-white p-5 w-40 h-45 text-black rounded-2xl mb-4">
            <h1 className="text-3xl font-bold">{e.note}</h1>
            <p className="italic">{e.details}</p>
          </div>
        })}</div>
        </div>
      </div>
    </div>
  )
}

export default App