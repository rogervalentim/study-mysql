const Card = ({ book: { title, imgUrl, genre, description } }) => {
  return (
    <div className="w-[375px] mt-[100px] text-white">
      <img className="w-[200px]" src={imgUrl} alt="image book" />
      <h1>{title}</h1> <span>{genre}</span>
      <p>{description}</p>
    </div>
  );
};

export default Card;
