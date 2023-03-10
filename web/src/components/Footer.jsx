import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin
} from "react-icons/bs";

import data from "../constants/data";


const Footer = () => {
  return (
    <footer className="mt-[100px] h-auto">
      <div className=" bg-yellow-200 sm:w-full  md:w-full  lg:w-full flex justify-between py-3 h-[150px]">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] px-4 text-gray-800">
          <span className="text-black mr-1 pt-2">
            <ion-icon name="book-outline"></ion-icon>
          </span>
          LIVROS
        </div>
        <div className="md:mt-4 flex px-6 items-center">
          <BsFacebook size={25} className="text-black mx-3" />
          <BsTwitter size={25} className="text-black mx-3" />
          <BsInstagram size={25} className="text-black mx-3" />
          <BsYoutube size={25} className="text-black mx-3" />
          <BsLinkedin size={25} className="text-black mx-3" />
        </div>
      </div>
      <div className="bg-black h-auto sm:block lg:flex justify-around">
        <ul className="mt-[50px]">
          <h5 className="text-white">Atendimento</h5>
          <li>Política de Vendas, Trocas e Privacidade</li>
          <li>Termos e condições de compra</li>
          <li>Fale conosco</li>
        </ul>
        <ul className="mt-[50px]">
          <h5 className="text-white">Institucional</h5>
          <li>Sobre o livros</li>
          <li>Relações com Investidores</li>
          <li>Nossas Lojas</li>
          <li>Trabalhe Conosco</li>
        </ul>
      <div className="mt-[50px]">
        <h5 className="text-white sm:mx-2">Formas de Pagamento</h5>
        <ul className="sm:flex lg:grid grid-cols-3 gap-1 ">
        {data.cardsOfPayement.map(card => (
          <img className="w-[35px] h-[35px] rounded-sm" key={card.imageCard} src={card.imageCard} />
        ))}
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
