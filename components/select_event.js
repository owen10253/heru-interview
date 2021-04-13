import { useState } from 'react';

export default function SelectEvent({ setEvent, setView, view }) {

  const [menu, toggleMenu] = useState(false);
  const [inputValue, setInput] = useState('');


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const updateView = (v) => {
    setView(v);
    console.log(view);
  }

  return (
    <div className="">
      <form className="bg-white shadow-lg border-gray-100 border-2 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="eventname">
            Event Name
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="eventname" type="text" placeholder="Type Name Here" />
        </div>

        <div className="flex justify-between">
          <div className="inline-block relative">
            <button onClick={() => { toggleMenu(!menu) }} type="button" className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Options</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul className={"absolute text-gray-100 pt-1 " + (menu ? "" : "hidden")}>
              <li onClick={()=>(updateView('hundred'))} className=""><a className="rounded-t bg-gray-800 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Hundred</a></li>
              <li className=""><a className="rounded-b bg-gray-800 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Global</a></li>
            </ul>
          </div>

          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}