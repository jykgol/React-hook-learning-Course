import "../Styles/Comment.css"
const Comment = (props) => {
	return (
		<div className="Comment_wrapper">
			<div className="id">{props.id}</div>
			<div className="name">{props.name}</div>
			<div className="body">{props.body}</div>
		</div>
	);
};

export default Comment