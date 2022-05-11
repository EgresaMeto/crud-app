import GridItem from "./GridItem";

const GridLayout = (props) =>{
    const { data, handleDelete, handleOpenModal } = props
    return(<div className="flex flex-wrap justify-center">
         {data.map((el, index) => {
                    return (
                      <div key={index}>
                        <GridItem
                          id={el.id}
                          handleDelete={handleDelete}
                          handleOpenModal={handleOpenModal}
                          title={el.title}
                          body={el.body}
                        />
                      </div>
                    )
                  })}
    </div>)
}

export default GridLayout;