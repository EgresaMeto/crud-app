import { useSelector } from "react-redux";
import GridItem from "./GridItem";

const GridLayout = (props) =>{
  const data = useSelector((state) => state.allPosts.posts);
    return(<div className="flex flex-wrap justify-center">
         {data.map((el, index) => {
                    return (
                      <div key={index}>
                        <GridItem
                          id={el.id}
                          title={el.title}
                          body={el.body}
                        />
                      </div>
                    )
                  })}
    </div>)
}

export default GridLayout;