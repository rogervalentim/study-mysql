import images from "./images";

const booksBestSelling = [
    {
        title: "O limite do universo",
        imgUrl: images.Book1,
        genre: "Ficção cientifica",
        price: "23,90"
    },
    {
        title: "O Gato Preto",
        imgUrl: images.Book2,
        genre: "Terror",
        price: "24,75"
    },
    {
        title: "Segredos de um Amor",
        imgUrl: images.Book3,
        genre: "Drama",
        price: "18,00"
    },
]

const cardsOfPayement = [{
    imageCard: images.Card1,
},
{
    imageCard: images.Card2,
},
{
    imageCard: images.Card3,
},
{
    imageCard: images.Card4,
},
{
    imageCard: images.Card5,
},
{
    imageCard: images.Card6,
},
]


export default { booksBestSelling, cardsOfPayement };