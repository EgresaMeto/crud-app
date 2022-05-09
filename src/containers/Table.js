import { useEffect, useState } from "react"
import { getAllPosts } from "../services/post.service";

const Table = () =>{ 
    const [tableData, setTableData] = useState([]);

    const fetchData = async () => {
        const res = await getAllPosts();
        debugger
        setTableData(res.data);
    }

    useEffect(()=>{
        fetchData()
    },[])
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
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-900'>
                  {tableData.map((el, index) => {
                    return (
                      <tr>
                        <td className='px-6 py-4  bg-yellow-200 shadow overflow-hidden border-b border-black-700 sm:rounded-lg font-mono'>
                          {el.id}
                        </td>
                        <td className='px-6 py-4 bg-blue-200 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm font-mono'>
                          {el.title}
                        </td>
                        <td className='px-6 py-4 bg-green-200 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm font-mono'>
                          {el.body}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Table;