import {useState, useEffect} from 'react'
import ModeButtons from './ModeButtons'
import Description from './Description'
import Hours from './Hours'
import Rate from './Rate'
import TableRow from './TableRow'
import TableHeader from './TableHeader'
import AddButtons from './AddButtons'
import './InvoiceTable.css'


const initialData = [

  { id: 0, description: 'Content plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalId = 4

const InvoiceTable = () => {

  const [testData, setTestData] = useState(initialData)

  useEffect(() => {
    console.log('Test Data Array', testData)
  }, [testData])


  const addInvoiceRow = () => {
    const testDataCopy = [...testData]

    const newRow = {
      id: globalId,
      description: 'New Job goes here',
      rate: 0,
      hours: 0
    }

    testDataCopy.push(newRow)

    setTestData(testDataCopy)

    globalId++
  }

  const deleteInvoiceRow = (id) => {
    console.log(`delete function hit for id: ${id}`)
    //make a copy of testData array
    //Filter out all elements that have a matching id
    //set testData state to be the new, edited array

    const testDataCopy = [...testData]


    const filterdArray = testDataCopy.filter((el) => el.id != id)


    setTestData(filterdArray)

  }

  const editInvoiceRow = (id, body) => {
    // 
    console.log('Row with id:', id)
    console.log('body object:', body)
    

    const testDataCopy = [...testData]

    const index = testDataCopy.findIndex((el) => el.id === id)

    testDataCopy.splice(index, 1, body)

    setTestData(testDataCopy)
  }

  const rows = testData.map((el) => <TableRow 

    initialIsEditing={false}
    initialDescription={el.description}
    initialRate={el.rate}
    initialHours={el.hours}
    key={el.id}
    deleteInvoiceRow={() => deleteInvoiceRow(el.id)}
    editInvoiceRow={editInvoiceRow}
    id={el.id}
  
  />)

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {rows}
      </tbody>
      <tfoot>
        <AddButtons addInvoiceRow={addInvoiceRow}/>
      </tfoot>
    </table>
  )


}

export default InvoiceTable