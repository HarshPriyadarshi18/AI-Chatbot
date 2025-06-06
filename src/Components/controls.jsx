import styles from './Controls.module.css';

export function Controls(){
    return(
     <div className={styles.Controls}>
        <div className={styles.TextAreaContainer}>
            <textarea className={styles.TextArea} placeholder="Message AI chatbot"/>
        </div>
        <button className={styles.Button}><SendIcon/></button>
     </div>
    )
}
function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 960 960"
      width="24px"
      fill="#5F6368"
    >
      <path d="M120 760V200l720 280-720 280v-120l480-160-480-160v-120Z" />
    </svg>
  );
}
