import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setSelectedPost } from "../redux/actions/postActions";
import { getAllPosts } from "../services/posts.service";
import GridLayout from "./grid/GridLayout";
import Modal from './Modal'

import Table from "./Table";
import { Icon } from '@iconify/react'
import { toggleModal } from "../redux/actions/modalAction";

const MainComponent = ()=> {
    const showModal = useSelector(state => state.modal.showModal)
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const handleOpenModal = (value) => {
        dispatch(setSelectedPost(value))
        dispatch(toggleModal(!showModal))
    }
    
    const fetchData = async () => {
        const res = await getAllPosts();
        dispatch(setPosts(res.data));
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return (
      <div>
        <div className='flex justify-around items-center mt-4 '>
          <button
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
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <Table
          />
        )}
        {showModal && (
          <Modal />
        )}
      </div>
    )
}

export default MainComponent;