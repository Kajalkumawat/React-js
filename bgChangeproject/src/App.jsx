import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center" style={{ backgroundColor: color }}>
      {/* Title */}
      <div className="fixed top-4 text-center text-white text-2xl font-bold">
        Background Color Changer
      </div>

      {/* Buttons Container */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button
          onClick={() => setColor("green")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("red")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("pink")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("black")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("purple")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("aqua")}
          className="outline-none px-6 py-3 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "aqua" }}
        >
          Aqua
        </button>
      </div>
    </div>
  );
}

export default App;
