import i from "./MyButton.module.css"

const MyButton = ({children, ...props}) => { 
    return (
        <button {...props} className={i.MyButton} >
            {children}
        </button>
    );
}

export default MyButton