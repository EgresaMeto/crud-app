import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../redux/actions/modalAction';
import { deletePostAction, setSelectedPost } from '../redux/actions/postActions';
import { deleteRow } from '../services/posts.service';

const Table = () => {

  const data = useSelector((state) => state.allPosts.posts);
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const handleDeleteRow = async (id) => {
    await deleteRow(id);
    dispatch(deletePostAction(id))
}

const handleOpenModal = (value) => {
  dispatch(setSelectedPost(value))
  dispatch(toggleModal(!showModal))
}

  if (!data) return <div>no data</div>
  return (
    <div className='mt-2 flex flex-col'>
      <div className='-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8'>
        <div className='py-8 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'></div>
          <div>
            <table className='min-w-full divide-y divide-c-900'>
              <thead className='bg-gray-50'>
                <tr>
                  {['Id', 'Title', 'Body', 'Edit', 'Delete'].map((el) => {
                    return (
                      <th className='px-6 py-3  text-lg font-large text-slate-500 text-gray-500 uppercase tracking-wider '>
                        {el}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-900'>
                {data.map((el, index) => {
                  return (
                    <tr key={index} onClick={() => {}}>
                      <td className='px-6 py-4 text-lg font-extrabold text-gray-500  bg-gray-50 shadow overflow-hidden border-b border-gray-900 '>
                        {el.id}
                      </td>
                      <td className='px-6 py-4 font-serif bg-gray-40 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm '>
                        {el.title}
                      </td>
                      <td className='px-6 py-4 font-serif bg-gray-40 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm '>
                        {el.body}
                      </td>
                      <td className='px-6 py-4  bg-white-50 shadow overflow-hidden border-b border-gray-700 sm:rounded-sm  '>
                        {' '}
                        <button onClick={() => handleOpenModal(el)}>
                          <Icon
                            icon='entypo:edit'
                            color='green'
                            width='36'
                            height='36'
                          />
                        </button>
                      </td>
                      <td className='px-6 py-4 shadow bg-white-50 overflow-hidden border-b border-gray-700 sm:rounded-sm '>
                        {' '}
                        <button onClick={() => handleDeleteRow(el.id)}>
                          <Icon
                            icon='akar-icons:trash-can'
                            color='red'
                            width='36'
                            height='36'
                          />
                        </button>
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

export default Table
