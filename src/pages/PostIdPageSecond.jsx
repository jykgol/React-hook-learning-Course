import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/loader/Loader";
import Comment from "../components/Comment";
import "../Styles/Comment.css"

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	})
	const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data);
	})
	useEffect(() => {
		fetchPostById(params.id);
		fetchCommentsById(params.id);
	}, [])

	return (
		<div>
			{isLoading || isLoadingComments ?
				<Loader /> :
				<div className="IdPage_wrapper">
					<h1>Вы открыли страницу поста {params.id}</h1>
					<div className="IdPage_Post">
						<div className="post_el">
							<strong> {post.id}. {post.title}</strong>
							<div className="post_content">
								<div>
									{post.body}
								</div>
							</div>
						</div>
						<h2>Comments Session</h2>
						<div className="IdPage_Comments">
							{comments.map(el => <Comment key={el.id} {...el} />)}
						</div>

					</div>
				</div>
			}

		</div>
	);
};

export default PostIdPage