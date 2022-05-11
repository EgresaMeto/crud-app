import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postActions";
import { createRow, deleteRow, getAllPosts, updateRow } from "../services/posts.service";
import GridLayout from "./grid/GridLayout";
import Modal from './Modal'

import Table from "./Table";
import { Icon } from '@iconify/react'

const MainComponent = ()=> {

     
    //const reduxData = useSelector((state) => state.posts);
    const [tableData, setTableData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});
    const [toggle, setToggle] = useState(false);

    const handleOpenModal = (value) => {
        setShowModal(!showModal);
        setSelectedRow(value);
    }
    
    const dispatch = useDispatch();
    const fetchData = async () => {
        const res = await getAllPosts();
        //dispatch(setPosts(res.data));
        setTableData(res.data);
    }

    const handleDeleteRow = async (id) => {
        await deleteRow(id);
        let newData = tableData.filter((el) => el.id !== id);
        setTableData(newData);
    }

    const handleUpdate = async (id, title, body) => {
        const res = await updateRow(id, title, body);
        debugger
        setShowModal(false);
        let index = tableData.findIndex((el)=>el.id === res.data.id);
        let newData = tableData;
        newData[index] = res.data;
        setTableData(newData);
    }

    const handleCreateRow = async (title, body) =>{
        const res = await createRow(title, body);
        setShowModal(false)
        setTableData([...tableData, res.data]);
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return (
      <div>
        <div className='flex justify-around items-center mt-4 '>
          <button
           className='hover:bg-green-400'
            onClick={() => handleOpenModal({ title: '', body: '', userId: 1 })}
          >
            <Icon
              icon='carbon:face-activated-add'
              color='gray'
              width='36'
              height='36'
            />
          </button>
          <div class='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              name='toggle'
              id='toggle'
              class='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
              onClick={() => setToggle(!toggle)}
              checked={toggle}
            />
            <label
              for='toggle'
              class='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </div>
        {toggle ? (
          <GridLayout
            data={tableData}
            handleDelete={handleDeleteRow}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <Table
            data={tableData}
            handleDelete={handleDeleteRow}
            handleOpenModal={handleOpenModal}
          />
        )}
        {showModal && (
          <Modal
            handleUpdate={handleUpdate}
            handleCreate={handleCreateRow}
            setShowModal={setShowModal}
            data={selectedRow}
          />
        )}
      </div>
    )
}

export default MainComponent;