import React from 'react';
import '../Styles/PostItem.css'
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  let deletePost = () => {
    props.deletePost(props.post.id)
  }
  const router = useNavigate();
  return (
    <div className="post_el" ref={props.post.nodeRef}>
      <strong> {props.post.id}. {props.post.title}</strong>

      <div className="post_content">
        <div>
          {props.post.body}
        </div>
        <div className="post_buttons">
          <MyButton onClick={()=> {router(`/posts/${props.post.id}`)}} >Открыть</MyButton>
          <MyButton onClick={deletePost} >Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
