
import Header from './components/Header';
import './App.css';
import Meme  from './components/Meme';
import MemeStyles  from './components/Meme.module.scss'
import Things from './components/Things';
import Messages from './components/Messages';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({});
  fetch("https://source.unsplash.com/collection/928423/480x480").then(res => res.json()).then(data =>console.log(data)).catch(err => console.log(err))
  return (
    <>
   <Header/>
   <Meme/> 
   {/* <Things/>
   {/* <Messages/> */}
   </>
  );
}

export default App;
