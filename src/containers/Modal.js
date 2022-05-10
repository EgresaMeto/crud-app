const Modal = (props) => {
    const {data} = props;
    if(!data) return <div>no data</div>
    return<div>
        <div>id: {data.id}</div>
        <div>title</div>
        <input defaultValue={data.title} />
        <div>body</div>

        <input defaultValue={data.body} />
        <button>close</button>
        <button>save</button>
        </div>
}

export default Modal