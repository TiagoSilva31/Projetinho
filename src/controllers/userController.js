const { 
    createUser,
    getById,
    getUsers,
    updateUser,
    removeUser,
} = require("../repositories/user")

exports.create = async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.get = async (req, res) => {
    try {
        const users = await getUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}
 
exports.getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id))
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.remove = async (req, res) => {
    try {
        await removeUser(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
}