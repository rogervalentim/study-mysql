import User from "../models/User.js";

export const createUser = async (req, res) => {
    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "usuário cadastrado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "erro ao cadastrar o usuário !"
            });
        });
};

export const listUser = async (req, res) => {
    await User.findAll(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "usuário listado com sucesso!",
            });
        }).catch(() => {
            return res.status(404).json({
                erro: true,
                mensagem: "erro ao listar o usuário"
            })
        })
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    await User.update(req.body, {
        where: {
            id,
        }
    })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "usuário autualizado com sucesso!",
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao atualizar o usuário!"
            })
        })
}

export const deleteUser = async (req,res) => {
    const { id } = req.params;
    await User.findByPk(id)
    await User.destroy({
        where: {
            id,
        }
    })
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário deletado com sucesso!",
        }).catch(() => {
            return res.status(400).json({
            erro: true,
            mensagem: "Erro ao deletar o livro",
        });
    });
    })
}