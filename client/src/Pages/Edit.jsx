import React, { useState } from "react";
import Home from "./Home";
import { useSearchParams } from "react-router-dom";
import Button from "../Components/Button";
import Draggable from "react-draggable";
import { useRef } from "react";

import { exportComponentAsJPEG } from "react-component-export-image";

function Edit() {
  const [params] = useSearchParams();
  // console.log(params.get("url"));

  const [text, seText] = useState("");

  const [data, setData] = useState([]);

  const handleClick = () => {
    const copy = [...data, text];
    setData(copy);
    seText("");
  };

  const memeRef = useRef();

  return (
    <>
      <div className="bg-white min-h-screen p-6 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white mb-6">Meme Generator</h1>
        
        <div ref={memeRef} className="relative">
          <img className="h-80 w-auto mb-4" src={params.get("url")} alt="meme" />
          {data &&
            data.map((e, index) => (
              <Draggable>
                <h1 className="absolute text-xl text-black font-bold cursor-move ">
                  {e}
                </h1>
              </Draggable>
            ))}
        </div>
        
        <input
          placeholder="Enter your text"
          value={text}
          onChange={(e) => seText(e.target.value)}
          className=" bg-gray-500 text-black font-bold py-2 px-4 rounded-xl mb-4 w-64 placeholder-black"
          type="text"
        />
        
        <div className="flex space-x-4">
          <button
            onClick={handleClick}
            className="bg-orange-500 text-black font-bold py-2 px-4 rounded-xl hover:bg-orange-600"
          >
            Add Text
          </button>
          <button
            onClick={() => exportComponentAsJPEG(memeRef)}
            className="bg-green-500 text-black font-bold py-2 px-4 rounded-xl hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Edit;
