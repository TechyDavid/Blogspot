import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.post}>
            <li className={classes.aut}>{props.author}</li>
            <li className={classes.text}>{props.body}</li>
        </div>
    );
}


export default Post;