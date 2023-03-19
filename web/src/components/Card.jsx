import React from "react";

const Card = ({ title, image , description, price }) =>  (
    <div className=" bg-white/5 bg-opacity-80 backdrop-blur-sm shadow cursor-pointer animate-slideup rounded-lg shadow-inherit h-auto w-[250px]  mt-[50px]">
      <div className="flex justify-center">
      <img className="saturate-200  w-[150px]" src={image} alt="image book" />
      </div>
      <div className="text-center ">
      <p className="text-gray-400 font-semibold">{title}</p> 
      <h3 className="text-black font-bold">R${price}</h3>
      <p className="text-cyan-500">{description}</p>
      <button className="text-black rounded bg-yellow-400 h-[45px] hover:bg-yellow-600 w-[150px] mt[2px]">Comprar</button>
      </div>
    </div>
  );

export default Card;

