import Book from "../models/Book.js";

export const createBooks = async (req, res) => {
    await Book.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Livros cadastrado com sucesso!"
            }).catch(() => {
                return res.status(404).json({
                    erro: true,
                    mensagem: "Erro ao cadastrarr os livros",
                });
            });
        })
};

export const listBooks = async (req, res) => {
  await Book.findAll(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Livros listado com sucesso!"
            }).catch((error) => {
                console.log(error)
            })
        });
}

export const updateBooks = async (req, res) => {
    const { id } = req.params;
    await Book.update(req.body, {
        where: {
            id,
        }
    })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "livro atualizado com sucesso !"
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro ao atualizar os livros"
                })
            });
        });
}

export const deleteBooks = async (req, res) => {
    const { id } = req.params;
    const deleteBook = await Book.findByPk(id)
    const result = await Book.destroy({
        where: {
            id: id,
        }
    })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "livro deletado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "erro ao deletar o livro"
            })
        })
}