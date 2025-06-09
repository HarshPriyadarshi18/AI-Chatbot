import { useState } from 'react';

import styles from './App.module.css'
import {Chat} from './Components/chat'
import { Controls } from './Components/controls';
import {GoogleGenerativeAI} from "@google/generative-ai"
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const gemini = googleai.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = gemini.startChat({ history: [] });
function App() {
 // const [messages,setMessages]=useState(MESSAGES);
   const [messages,setMessages]=useState([]);
     function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }
    async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      const result = await chat.sendMessage(content);
      addMessage({ content: result.response.text(), role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    }
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