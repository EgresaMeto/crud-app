import { Icon } from '@iconify/react';

const GridItem = (props) => {
    const { id, title, body, handleDelete, handleOpenModal } = props
    return (
      <div>
        <div className='flex w-full py-12 px-6 justify-center items-center '>
          <div>
            <div className='max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4'>
              <div>
                <h4 className='text-gray-800 dark:text-gray-100 font-bold mb-3'>
                  ID: {id}
                </h4>
                <p className='text-gray-800 dark:text-gray-100 text-sm'>
                  TITLE:{title}
                </p>
                <p className='text-gray-800 dark:text-gray-100 text-sm'>
                  BODY:{body}
                </p>
              </div>
              <div>
                <div className='flex items-center justify-between text-gray-800' >
                  <div className='w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center cursor-pointer'>
                    <button onClick={() => handleOpenModal(id)}>
                      <Icon icon='clarity:edit-line' />
                    </button>
                  </div>
                  <div className='w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center cursor-pointer'>
                    <button onClick={() => handleDelete(id)}>
                      <Icon icon='akar-icons:trash-can' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default GridItem;