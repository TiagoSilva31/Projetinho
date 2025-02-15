const { 
    salesValidation,
    updateSalesValidation 
} = require("../validation/salesValidation")

const { 
    createSale,
    getById, 
    getSales, 
    updateSale, 
    removeSale 
} = require("../repositories/sales")

exports.create = async (req, res) => {
    try {
        const data = await salesValidation.parse(req.body)
        const sales = await createSale(data)
        res.status(200).send(sales)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.get = async (req, res) => {
    try {
        const sales = await getSales()
        res.status(200).send(sales)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getId = async (req, res) => {
    try {
        const sales = await getById(Number(req.params.id))
        res.status(200).send(sales)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const data = await updateSalesValidation.parse(req.body)
        const sale = await updateSale(Number(req.params.id), data)
        res.status(200).send(sale)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.remove = async (req, res) => {
    try {
        await removeSale(Number(req.params.id))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
}