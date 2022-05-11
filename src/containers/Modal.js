import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/actions/modalAction";
import { createPostAction, updatePostAction } from "../redux/actions/postActions";
import { createRow, updateRow } from "../services/posts.service";

const Modal = () => {
    const selectedPost = useSelector(state => state.allPosts.selectedPost)
    const showModal = useSelector(state => state.modal.showModal)
    const [title, setTitle] = useState( selectedPost.title)
    const [body, setBody] = useState(selectedPost.body)

    const dispatch = useDispatch();

    const handleOnChange = (event, target) => {
        if(target === "title"){
           return setTitle(event.target.value)
        }
        return setBody(event.target.value)
    }

    const handleUpdate = async (id, title, body) => {
      const res = await updateRow(id, title, body);
      dispatch(toggleModal(!showModal))
      dispatch(updatePostAction(res.data));
    }

    const handleCreate = async (title, body) =>{
      const res = await createRow(title, body);
      dispatch(toggleModal(!showModal))
      dispatch(createPostAction(res.data))
  }
    return<>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {selectedPost.id ? "Edit Element" : "Add Element"}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => dispatch(toggleModal(false))}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex  flex-col">
          <div>
               {selectedPost.id && `Id: ${selectedPost.id}`}
              </div>
             <label>
                Title:
                <input type="text" value={title} onChange={(e)=>{handleOnChange(e, "title")}} />
            </label>
            <label>
                Body:
                <input type="text" value={body} onChange={(e)=>{handleOnChange(e, "body")}} />
            </label>
             
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => dispatch(toggleModal(false))}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                  if(selectedPost.id){return handleUpdate(selectedPost.id, title, body)}
                  handleCreate(title, body);
                  }
                }
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
}

export default Modal