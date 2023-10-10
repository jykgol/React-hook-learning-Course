import i from "./MyModal.module.css"

const MyModal =  (props) => {

    const rootClass = [i.MyModal]

    if (props.visible) {
        rootClass.push(i.active);
    }

    return (
        <div className={rootClass.join(" ")} onClick={() => props.setVisible(false)}>
            <div className={i.MyModalContent} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default MyModal