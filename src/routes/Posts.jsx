import { Outlet } from 'react-router-dom';
import PostList from '../Components/PostList';

function Posts() {
  return(
    <>
      <Outlet/>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
