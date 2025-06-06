import styles from './chat.module.css';

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {messages.map(({ role, content }, index) => (
        <div
          key={index}
          data-role={role}
          className={styles.Message}
        >
          {content}
        </div>
      ))}
    </div>
  );
}
