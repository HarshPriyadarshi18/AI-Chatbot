import { useState } from 'react';
import styles from './Sidebar.module.css'
const CHATS = [
  {
    id: 1,
    title: "How to use AI Tools API in React Application",
  },
  {
    id: 2,
    title: "Gemini AI vs ChatGPT",
  },
  {
    id: 3,
    title: "Comparising Models for Popular AI Tools",
  },
  {
    id: 4,
    title: "How to use AI tools in your daily life",
  },
  {
    id: 5,
    title: "How to use AI tools in your daily work",
  },
];

export function Sidebar({chats=CHATS,activechatid=1}){
  const[isOpen,setisOpen]=useState(false);
  function sethandletoggle(){
    setisOpen(!isOpen);
  }
   return (
   <>
   <button className={styles.MenuButton} onClick={sethandletoggle}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
   <div className={styles.Sidebar} data-open={isOpen}>
    <ul className={styles.Chats}>
        {chats.map((chat) =>(
            <li key={chat.id} className={styles.Chat} data-active={chat.id===activechatid}><button className={styles.chatbutton}><div className={styles.chattitle}>{chat.title}</div></button></li>
        ))
        }
    </ul>
   </div>
   {isOpen && <div className={styles.overlay} onClick={sethandletoggle}/>}
   </>
   
   )
}