import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-[100px]">
        <div className=" bg-yellow-200 flex justify-between py-3">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] px-4 text-gray-800">
          <span className="text-black mr-1 pt-2">
            <ion-icon name="book-outline"></ion-icon>
          </span>
          LIVROS
        </div>
        <div className="flex px-6">
        <BsFacebook className="text-black h-[60px] mx-1" />
        <BsTwitter className="text-black h-[60px] mx-1" />
        <BsInstagram className="text-black h-[60px] mx-1" />
        <BsYoutube className="text-black h-[60px] mx-1" />
        <BsLinkedin className="text-black h-[60px] mx-1" />
        </div>
        </div>
    </footer>
  )
};

export default Footer;
