import { useState } from 'react';
import styles from './App.module.css'
import {Chat} from './Components/chat'
import { Controls } from './Components/controls';
function App() {
 // const [messages,setMessages]=useState(MESSAGES);
   const [messages,setMessages]=useState([]);
   function handleContentSend(content){
     setMessages((prevMessages)=>[...prevMessages,{content,role:'user'}])
   }
 return (
  <div className={styles.App}>
    <header className={styles.Header}>
       <img className={styles.Logo}  src="chat-bot.png"/>
       <h2 className={styles.Title}>AI Chatbot</h2>
    </header>
    <div className={styles.chatContainer}>
     <Chat messages={messages} />
   </div>
     <Controls onSend={handleContentSend}/>
  </div>
 );
}
/*
const MESSAGES=[
  {
    role:'user',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    role:'assistant',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
   {
    role:'user',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    role:'assistant',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
   {
    role:'user',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    role:'assistant',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
   {
    role:'user',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    role:'assistant',
    content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

]*/

export default App
