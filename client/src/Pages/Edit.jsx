import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Draggable from "react-draggable";
import { exportComponentAsJPEG } from "react-component-export-image";

function Edit() {
  const [params] = useSearchParams();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const memeRef = useRef();

  const colors = ["#000000", "#1E40AF", "#DC2626", "#10B981", "#8B5CF6"];

  const handleClick = () => {
    const newText = { text, color: "#000000" };
    setData([...data, newText]);
    setText("");
  };

  const handleDoubleTap = (index) => {
    const updatedData = [...data];
    const currentColorIndex = colors.indexOf(updatedData[index].color);
    const nextColor = colors[(currentColorIndex + 1) % colors.length];

    updatedData[index] = {
      ...updatedData[index],
      color: nextColor,
    };

    setData(updatedData);
  };

  const handleSingleClick = (index) => {
    const currentTime = Date.now();
    const clickGap = 300; 
    const lastClickTime = data[index]?.lastClickTime || 0;

    if (currentTime - lastClickTime < clickGap) {
      handleDoubleTap(index); 
    } else {
      setData((prevData) =>
        prevData.map((item, i) =>
          i === index ? { ...item, lastClickTime: currentTime } : item
        )
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-6 shadow-lg">Meme Generator</h1>
      
      <div ref={memeRef} className="relative">
        <img className="h-80 w-auto mb-4 rounded-lg shadow-lg" src={params.get("url")} alt="meme" />
        
        {data.map((item, index) => (
          <Draggable key={index}>
            <h1
              className="absolute text-xl cursor-pointer font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleSingleClick(index)}
              style={{
                color: item.color,
                fontSize: "24px",
                textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
              }}
            >
              {item.text}
            </h1>
          </Draggable>
        ))}
      </div>
      
      <input
        placeholder="Enter your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-white text-black font-bold py-2 px-4 rounded-xl mb-4 w-64 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        type="text"
      />
      
      <div className="flex space-x-4">
        <button
          onClick={handleClick}
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-600 transition-all duration-300"
        >
          Add Text
        </button>
        <button
          onClick={() => exportComponentAsJPEG(memeRef)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-green-600 transition-all duration-300"
        >
          Save
        </button>
      </div>
      <h1 className="text-white mt-4 text-sm">Double tap on added text to change color</h1>
    </div>
  );
}

export default Edit;
