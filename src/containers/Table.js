import { useState } from "react"
import Modal from "./Modal";

const Table = (props) =>{ 
    //1.create a modal component
    //2.modal component should display el.id el.title el.body
    //3. delete a row from table with async call
    //4. update component
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState({})
    const handleOpenModal = (value) => {
        setShowModal(!showModal);
        setSelectedRow(value);
    }
  const {data, handleDeleteRow} = props
    if(!data) return <div>no data</div>
    return (
      <div className='mt-2 flex flex-col'>
        <div className='-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8'>
          <div className='py-8 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'></div>
            <div>
              <table className='min-w-full divide-y divide-c-900'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='px-6 py-3  text-lg font-medium text-black-500 uppercase tracking-wider '>
                      Id
                    </th>
                    <th className='px-6 py-3  text-lg font-medium text-black-500 uppercase tracking-wider'>
                      Title
                    </th>
                    <th className='px-6 py-3  text-lg font-medium text-black-500 uppercase tracking-wider'>
                      Body
                    </th>
                    <th>edit</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-900'>
                  {data.map((el, index) => {
                    return (
                      <tr key={index} onClick={() => {}}>
                        <td className='px-6 py-4  bg-yellow-200 shadow overflow-hidden border-b border-black-700 sm:rounded-lg '>
                          {el.id}
                        </td>
                        <td className='px-6 py-4 bg-blue-200 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm '>
                          {el.title}
                        </td>
                        <td className='px-6 py-4 bg-green-200 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm '>
                          {el.body}
                        </td>
                        <td onClick={()=> handleOpenModal(el)}>edit</td>
                        <td onClick={() =>handleDeleteRow(el.id)}>delete</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showModal && <Modal data={selectedRow}/>}
      </div>
    )
}

export default Table;