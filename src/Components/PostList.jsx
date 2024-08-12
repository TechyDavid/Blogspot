import {useState} from 'react';
import Post from './Post';
import NewPost from './NewPost.jsx'
import classes from './PostList.module.css';
import Modal from './Modal.jsx'

function PostList({isPosting, onStopPosting}) {
 const {posts, setPosts } = useState([])

 function addPostHandler(postData) {

 }
    return ( 
    <>
       {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost 
                    onCancel={onStopPosting}
            />
        </Modal>
       )}
    <ul className={classes.Posts}>
         <Post author="Rufus" body="By this time next week you will be proud of yourself" />
    </ul>

    </>
    );
}

export default PostList;