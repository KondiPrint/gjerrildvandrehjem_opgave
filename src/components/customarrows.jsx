import React from "react";
import { IoCaretForwardCircle } from "react-icons/io5";
import { IoCaretBackCircleSharp } from "react-icons/io5";

const CustomPrevArrow = (props) => {
  return (
    <div
      {...props}
      className="absolute top-1/2 left-72 -ml-4 transform -translate-y-1/2 cursor-pointer"
    >
      {/* Tilpas indholdet af tilbagepilen her */}
      <span className="text-5xl"><IoCaretBackCircleSharp className="fill-neutral-400"/></span>
    </div>
  );
};

const CustomNextArrow = (props) => {
  return (
    <div
      {...props}
      className="absolute top-1/2 right-72 -mr-4 transform -translate-y-1/2 cursor-pointer"
    >
      {/* Tilpas indholdet af fremadpilen her */}
      <span className="text-5xl"><IoCaretForwardCircle className="fill-neutral-400"/></span>
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
