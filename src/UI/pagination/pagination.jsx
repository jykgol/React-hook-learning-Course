import { usePagesArray } from "../../Utils/pages";
import i from "./pagination.module.css"

const Pagination = (props) => {
    let pagesArray = usePagesArray(props.totalPageCount);
    return (
        <div style={{ display: 'flex', gap: "10px", flexWrap:'wrap', justifyContent: 'center' }}>
            {pagesArray.map(el =>
                <button key ={el} className={props.page === el ? [i.page,i.active_page].join(" ") : i.page} onClick={() => props.changePage(el)} >{el}</button>
            )}
        </div>
    );
};

export default Pagination