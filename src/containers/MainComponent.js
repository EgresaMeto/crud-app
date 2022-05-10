import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postActions";
import { createRow, deleteRow, getAllPosts, updateRow } from "../services/posts.service";
import GridLayout from "./grid/GridLayout";
import Modal from "./Modal";
import Table from "./Table";

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

    return(<div> 

        <div className="flex justify-around">
            <button 
            onClick={()=>handleOpenModal(
                {title: '',
                body: '',
                userId: 1})}>
                    add
                    </button>
            <button onClick={()=> setToggle(!toggle)}>toggle</button>

        </div>
        {toggle ? <GridLayout data={tableData}/> : 
            <Table data={tableData} handleDelete={handleDeleteRow} handleOpenModal={handleOpenModal} /> 
        }
        {showModal && <Modal handleUpdate={handleUpdate} handleCreate={handleCreateRow} setShowModal={setShowModal} data={selectedRow}/>}
    </div>)
}

export default MainComponent;