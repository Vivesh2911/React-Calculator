import React from 'react'
import styles from "./ParentContainer.module.css";

export default function ParentContainer({children}) {
  return (
    <center>
    <div className={styles.heading}>
      {/* // to give class for css we use this styles.name of class want to provide  */}
      {children}
    </div>
    </center>
  )
}
