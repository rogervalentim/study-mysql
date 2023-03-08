import React from "react";

const Card = ({ title, image , description, price, }) =>  (
    <div className=" bg-white/5 bg-opacity-80 backdrop-blur-sm shadow cursor-pointer animate-slideup rounded-lg shadow-inherit h-auto md:w-[300px]  lg:w-[200px] mt-[50px]">
      <div className="flex justify-center">
      <img className="saturate-200 md:w-[200px] lg:w-[150px]" src={image} alt="image book" />
      </div>
      <div className="text-center ">
      <p className="text-gray-400 font-semibold">{title}</p> 
      <h3 className="text-white font-bold">R${price}</h3>
      <p>{description}</p>
      <button className=" text-black rounded bg-yellow-400 hover:bg-yellow-600 md:w-[200px] lg:w-[150px] mt[5px] h-[40px]">Comprar</button>
      </div>
    </div>
  );

export default Card;

