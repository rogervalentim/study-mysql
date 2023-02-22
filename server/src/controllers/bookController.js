import Book from "../models/Book.js";

export const createBooks = async (req,res) => {
    await Book.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Livros cadastrado com sucesso!"
        }).catch(() => {
            return res.status(404).json({
                erro: true,
                mensagem: "Erro ao cadastrarr os livros"
            })
        })
    })
};

export const bestSellingBooks = async (req, res) => {
    await Book.findAll()
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Livros listado com sucesso!"
            }).catch(() => {
                return res.json({
                    erro: true,
                    mensagem: "Erro ao listar os livros"
                })
            })
        })
}

