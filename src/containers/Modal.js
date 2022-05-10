import { useState } from "react";

const Modal = (props) => {
    const {data, setShowModal, handleUpdate, handleCreate} = props;
    const [title, setTitle] = useState( data.title)
    const [body, setBody] = useState(data.body)

    const handleOnChange = (event, target) => {
        if(target === "title"){
           return setTitle(event.target.value)
        }
        return setBody(event.target.value)
    }



    if(!data) return <div>no data</div>
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
              Edit Element
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex  flex-col">
          <div>
               Id: {!!data.id}
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
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                  if(data.id){return handleUpdate(data.id, title, body)}
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