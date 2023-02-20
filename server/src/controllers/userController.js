import User from "../models/User.js"

export const createUser = async (req, res) => {
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "usuário cadastrado com sucesso!"
        })        
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "erro ao cadastrar o usuário !"
        })
    })
}


