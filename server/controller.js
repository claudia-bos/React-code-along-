//this invoiceData came from index.js

let invoiceData = [

    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

let globalId = 4

const handlerFuctions = {
    
    getInvoices: (req, res) => {
    res.status(200).send(invoiceData)
    },

    addInvoice: (req, res) => {
        const newRow = req.body

        newRow.id = globalId

        invoiceData.push(newRow)

        globalId++

        res.status(200).send(invoiceData)

    },

    badInvoice: (req, res) => {
        const {id} = req.params

        invoiceData = invoiceData.filter((el) => el.id != id)

        res.status(200).send(invoiceData)

    },

    editInvoice: (req, res) => {
        const {id} = req.params
        const editData = req.body
        
        editData.id = +id
        editData.isEditing = false

        const index = invoiceData.findIndex((el) => el.id === +id)

        invoiceData.splice(index, 1, editData)

        
        res.status(200).send(invoiceData)
    }

}

export default handlerFuctions