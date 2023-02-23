import React from "react";

export const Card = ({ book: { title, imgUrl, genre, price} }) =>  (
    <div className=" border border-[#30363d] w-[200px] mt-[50px] shadow-inherit">
      <div className="flex justify-center">
      <img className="w-[150px] saturate-200" src={imgUrl} alt="image book" />
      </div>
      <div className="text-center ">
      <h1 className="text-white">{title}</h1> <span>{genre}</span>
      <h3 className="text-white font-bold">R${price}</h3>
      <button className="w-[150px] h-[40px] text-black bg-yellow-400 hover:bg-yellow-600">Comprar</button>
      </div>
    </div>
  );


