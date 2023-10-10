import React from 'react';
import '../Styles/PostItem.css'
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostsItem = (props) => {
    let getPosts = () => {
        return props.posts.map((el, index) =>
            <CSSTransition
                key={el.id}
                timeout={500}
                classNames="post">
                <PostItem deletePost={props.deletePost}
                    post={{ id: el.id, title: el.title, body: el.body, index: index + 1 }} />
            </CSSTransition>)
    }

    if (!props.posts.length) {
        return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
    }

    return (
        <div className="posts_father">
            <h1>{props.title}</h1>
            <TransitionGroup className="posts">
                {getPosts()}
            </TransitionGroup>
        </div>
    );
}

export default PostsItem;
