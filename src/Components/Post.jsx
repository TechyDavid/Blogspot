import classes from './Post.module.css';

function Post({ author, body}) {
    return (
        <div className={classes.post}>
            <li className={classes.aut}>{author}</li>
            <li className={classes.text}>{body}</li>
        </div>
    );
}


export default Post;