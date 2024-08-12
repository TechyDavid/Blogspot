import {useState} from 'react';
import Post from './Post';
import NewPost from './NewPost.jsx'
import classes from './PostList.module.css';
import Modal from './Modal.jsx'

function PostList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState(''); 
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }
    // let modalContent;

    // if (modalIsVisble){
    //     <Modal onClose={hideModalHandler}>
    //     <NewPost onBodyChange={bodyChangeHandler} 
    //             onAuthorChange={authorChangeHandler} 
    //     />
    // </Modal>
    // }

    return ( 
    <>
       {isPosting && (
        <Modal onClose={onStopPosting}>
            <NewPost onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
            />
        </Modal>
       )}
    <ul className={classes.Posts}>
         <Post author={enteredAuthor} body={enteredBody}/>
         <Post author="Rufus" body="By this time next week you will be proud of yourself" />
    </ul>

    </>
    );
}

export default PostList;