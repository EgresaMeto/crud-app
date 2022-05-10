import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postActions";
import { getAllPosts } from "../services/post.service";
import Table from "./Table";

const MainComponent = ()=>{
    //const reduxData = useSelector((state) => state.posts);
    const [tableData, setTableData] = useState([])
    const dispatch = useDispatch();
    const fetchData = async () => {
        const res = await getAllPosts();
        dispatch(setPosts(res.data));
        debugger
        setTableData(res.data);
    }

    const handleDeleteRow = async (id) => {
       
    }

    const handleUpdate = async (id) => {
        
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return(<div> <Table data={tableData} handleDelete={handleDeleteRow} /></div>)
}

export default MainComponent;