import React from "react";

const Card = ({ src, text, description, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`shadow p-4 cursor-pointer ${
        isActive ? "bg-[#F9E9E9]" : "bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-gray-100  p-4 w-12 isActive ? "bg-[#F9E9E9]" : "bg-gray-100"`}
      >
        <img
          src={src}
          alt={text}
          className={`w-8 isActive ? "bg-[#F9E9E9]" : "bg-white"`}
        />
      </div>
      <p className="font-bold py-2">{text}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
