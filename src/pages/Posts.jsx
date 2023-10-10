import { useEffect, useRef, useState } from 'react';
import '../Styles/App.css';
import PostsList from '../components/PostsList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../UI/myModal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../Utils/pages';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/select/MySelect';

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ quarry: "", sort: "" })
	const [modal, setModal] = useState(false);
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(1);
	const lastElement = useRef();
	const [totalPageCount, setTotalPageCount] = useState(0);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quarry);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		let totalPosts = response.headers["x-total-count"];
		setTotalPageCount(getPageCount(totalPosts, limit));
		console.log(totalPageCount);
	});

	useObserver(lastElement, isPostsLoading, page < totalPageCount, () => { changePage(page + 1) });


	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit])

	let createPost = (NewPost) => {
		setPosts([...posts, { ...NewPost, id: posts.length !== 0 ? Math.max.apply(null, posts.map(el => el.id)) + 1 : 1 }]);
		setModal(false);
	}
	let removePost = (id) => {
		setPosts(posts.filter(el => el.id !== id));
	}
	let changePage = (page) => {
		setPage(page);
	}

	return (
		<div className='Posts_Page'>
			<MyButton onClick={() => setModal(true)} style={{ fontSize: "22px" }}>
				Создать пользователя
			</MyButton>



			<PostFilter filter={filter} setFilter={setFilter} />
			<MySelect
				value={limit}
				setValue={value =>  setLimit(value) }
				defaultValue="Количество элементов на странице"
				options={[
					{value: 5, name:'5'},
					{value: 10, name:'10'},
					{value: 25, name:'25'},
					{value: -1, name:'Показать все'},
				]}
			/>
			{postError && <h1>Произошла ошибка ${postError}</h1>}
			{isPostsLoading &&
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: "50px" }}><Loader /></div>
			}
			<PostsList posts={sortedAndSearchedPosts} title={'JS Learn FAST'} deletePost={removePost} />
			<hr ref={lastElement}  ></hr>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			{/* <Pagination totalPageCount={totalPageCount} changePage={changePage} page={page} /> */}
		</div>
	);
}

export default Posts;
