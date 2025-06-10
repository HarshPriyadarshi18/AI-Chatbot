import Markdown from 'react-markdown'
import styles from './chat.module.css';

const WELCOME_MESSAGES=
  {
    role:'assistant',
    content:'Hello,How can i assist you!',
  };

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGES, ...messages].map(({ role, content }, index) => (
        <div
          key={index}
          data-role={role}
          className={styles.Message}
        >
          <Markdown>{content}</Markdown>
        </div>
      ))}
    </div>
  );
}
