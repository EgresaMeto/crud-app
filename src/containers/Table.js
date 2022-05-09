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
    return(<div>
        <table class="table-auto">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
        {tableData.map((el, index) =>{
            return (
                <tr>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.body}</td>
                 </tr>
            )
        })}
    </tbody>
  </table>
  </div>)
}

export default Table;