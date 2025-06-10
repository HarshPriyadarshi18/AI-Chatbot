import { useState } from 'react';
import styles from './controls.module.css';

export function Controls({onSend}){
  const [content,setContent]=useState("");
  function handleContentChanges(event){
     setContent(event.target.value);
  }
  function handleContentSend(){
    if(content.length>0){
      onSend(content)
     setContent("");
    }
    
  }
  function handleEnterPress(event){
   if(event.key=='Enter' && !event.shiftKey){
     event.preventDefault();
     handleContentSend();
   }
  }
    return(
     <div className={styles.Controls}>
        <div className={styles.TextAreaContainer}>
            <textarea className={styles.TextArea} placeholder="Message AI chatbot" value={content} onChange={handleContentChanges} onKeyDown={handleEnterPress} />
        </div>
        <button className={styles.Button} onClick={handleContentSend}><SendIcon/></button>
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
