import { useState } from 'react';
import { Assistance} from './Assistance/googleai';
import styles from './App.module.css'
import {Chat} from './Components/chat'
import { Controls } from './Components/controls';
import { Loader } from './Components/Loader';
function App() {
 // const [messages,setMessages]=useState(MESSAGES);
   const [messages,setMessages]=useState([]);
   const[isLoading,setisLoading]=useState(false);
   const assistance=new Assistance()
     function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }
    async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setisLoading(true);
    try {
      const result = await assistance.chat(content)
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    }
    finally{
      setisLoading(false);
    }
  }

 return (
  <div className={styles.App}>
   {isLoading && <Loader/>} 
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