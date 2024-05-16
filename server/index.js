// Import packages
import express from 'express'
import viteExpress from 'vite-express'
import handlerFuctions from './controller.js'


//create express instance

const app = express()

//set up middleware (//javascript object notation =json)
app.use(express.json())


//ENDPOINTS

//we get this from invoiceTable.js -const initialData variable

// const invoiceData = [

//     { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//     { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//     { id: 2, description: 'Website design', rate: 50, hours: 5 },
//     { id: 3, description: 'Website development', rate: 100, hours: 5 },
//   ];

// let globalId = 4

// app.get('/invoices', (req, res) => {
//     res.status(200).send(invoiceData)
// })
// THEN WE PAST THAT DATA TO controller.js

const {getInvoices, addInvoice, badInvoice, editInvoice} = handlerFuctions

app.get('/invoices', getInvoices)
app.post('/newInvoice', addInvoice)
app.delete('/badInvoice/:id', badInvoice)
app.put('/updateInvoice/:id', editInvoice)
//when somebody hits delete endpoint the /: is saying i am making a variable id 

//open door to server with .listen()
viteExpress.listen(app, 9001, () => console.log('Server level OVER 9000! View at http://localhost:9001'))