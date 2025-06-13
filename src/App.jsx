import { useState } from 'react';
import { Assistance } from './Assistance/googleai';
import styles from './App.module.css';
import { Chat } from './Components/chat';
import { Controls } from './Components/controls';
import { Loader } from './Components/Loader';
import { Sidebar } from './Components/Sidebar';
import { v4 as uuidv4 } from 'uuid';

// Initial chat list
const CHATS = [
  { id: 1, title: "How to use AI Tools API in React Application" },
  { id: 2, title: "Gemini AI vs ChatGPT" },
  { id: 3, title: "Comparing Models for Popular AI Tools" },
];

function App() {
  const [messagesByChatId, setMessagesByChatId] = useState({});
  const [activeChatId, setActiveChatId] = useState(CHATS[0].id);
  const [chats, setChats] = useState(CHATS);
  const [isLoading, setIsLoading] = useState(false);
  const assistance = new Assistance();

  // Get current chat messages
  const messages = messagesByChatId[activeChatId] || [];

  // Add message to current chat
  function addMessage(message) {
    setMessagesByChatId(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), message],
    }));
  }

  // Handle user message
  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistance.chat(content);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Create a new chat
  function handlenewchatcreate() {
    const id = uuidv4();
    const newChat = { id, title: `New Chat ${chats.length + 1}` };
    setChats(prev => [...prev, newChat]);
    setActiveChatId(id);
    setMessagesByChatId(prev => ({ ...prev, [id]: [] }));
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img className={styles.Logo} src="chat-bot.png" alt="Chatbot Logo" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.Content}>
        {/* Sidebar with chat list */}
        <Sidebar
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={(id) => setActiveChatId(id)}
          onnewchatcreate={handlenewchatcreate}
        />

        {/* Main Chat Area */}
        <main className={styles.Main}>
          <div className={styles.chatContainer}>
            <Chat messages={messages} />
          </div>
          <Controls onSend={handleContentSend} />
        </main>
      </div>
    </div>
  );
}

export default App;
