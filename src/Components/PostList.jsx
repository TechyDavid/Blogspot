import {useState} from 'react';
import Post from './Post';
import NewPost from './NewPost.jsx'
import classes from './PostList.module.css';
import Modal from './Modal.jsx'

function PostList({isPosting, onStopPosting}) {
 const {posts, setPosts } = useState([])

 function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
 }
    return ( 
    <>
       {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost 
                    onCancel={onStopPosting}  onAddPost={addPostHandler} />
        </Modal>
       )}
    <ul className={classes.Posts}>
         {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} /> )}
    </ul>
    </>
    );
}

export default PostList;