import React from "react";

const Card = ({ title, image , description, price, }) =>  (
    <div className="bg-white/5 bg-opacity-80 h-[400px] backdrop-blur-sm shadow cursor-pointer animate-slideup rounded-lg w-[200px] mt-[50px] shadow-inherit">
      <div className="flex justify-center">
      <img className="w-[150px] saturate-200" src={image} alt="image book" />
      </div>
      <div className="text-center ">
      <p className="text-gray-400 font-semibold">{title}</p> 
      <h3 className="text-white font-bold">R${price}</h3>
      <p>{description}</p>
      <button className="w-[150px] mt[5px] h-[40px] text-black rounded bg-yellow-400 hover:bg-yellow-600">Comprar</button>
      </div>
    </div>
  );

export default Card;


