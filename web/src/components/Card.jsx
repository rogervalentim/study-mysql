import React from "react";

export const Card = ({ book: { title, imgUrl, genre, price} }) =>  (
    <div className="w-[200px] mt-[50px] shadow-inherit">
      <div className="flex justify-center">
      <img className="w-[150px] skew-y-6 saturate-200" src={imgUrl} alt="image book" />
      </div>
      <div className="text-center">
      <h1 className="text-black">{title}</h1> <span>{genre}</span>
      <h3 className="text-black font-bold">R${price}</h3>
      <button className="w-[180px] h-[40px] bg-yellow-400 hover:bg-yellow-600 text-white">Comprar</button>
      </div>
    </div>
  );


