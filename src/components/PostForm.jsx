import { useState } from 'react';
import '../Styles/PostItem.css'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = (props) => {
    const [post, setPost] = useState({ title: '', body: '', });
    let AddNewPost = (e) => {
        e.preventDefault();
        const NewPost = {
          title: post.title.length  ? post.title : 'Заголовок',
          body: post.body.length  ? post.body : 'А тут описание было, елки иголки',
        }
        setPost({...post, title: '', body: ''});
        props.create(NewPost);
      }
    return (
        <form>
        <MyInput type="text" placeholder="Название поста" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <MyInput type="text" placeholder="Описание поста" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
        <MyButton onClick={AddNewPost} >Создать пост</MyButton>
      </form>
    );
}

export default PostForm;
