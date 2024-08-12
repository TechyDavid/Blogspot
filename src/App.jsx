import { useState } from 'react';
import MainHeader from './Components/MainHeader'
import PostList from './Components/PostList';
import './App.css'

function App() {
  const [modalIsVisble, setModalIsVisible] = useState(true);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler(){
    setModalIsVisible(false);
  }

  return(
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisble} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
