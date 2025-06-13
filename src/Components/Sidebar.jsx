import { useState } from 'react';
import styles from './Sidebar.module.css';

export function Sidebar({ chats = [], activeChatId = null, onSelectChat = () => {},onnewchatcreate,messages }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Menu Button */}
      <button className={styles.MenuButton} onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      {/* Sidebar Panel */}
      <div className={styles.Sidebar} data-open={isOpen}>
        <button className={styles.newchatbutton} disabled={messages.length===0} onClick={onnewchatcreate}>New Chat</button>
        <ul className={styles.Chats}>
       {(chats || [])
  .filter(
    ({ title, messages }) =>
      !title?.toLowerCase().startsWith("new chat") || 
      (Array.isArray(messages) && messages.length > 0)
  )
  .map((chat) => (
    <li
      key={chat.id}
      className={styles.Chat}
      data-active={chat.id === activeChatId}
    >
      <button
        className={styles.chatbutton}
        onClick={() => {
          onSelectChat(chat.id);
          setIsOpen(false);
        }}
      >
        <div className={styles.chattitle}>{chat.title}</div>
      </button>
    </li>
))}

        </ul>
      </div>

      {/* Click-away overlay */}
      {isOpen && <div className={styles.overlay} onClick={handleToggle} />}
    </>
  );
}
