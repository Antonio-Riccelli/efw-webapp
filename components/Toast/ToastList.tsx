import React, { useState, useEffect } from 'react'
import Toast from './Toast'
import styles from './Toast.module.css'

const ToastList = (props) => {
  const { toastList } = props
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList(toastList)
  }, [toastList, list])

  return (
    <>
      {/* TODO: Fix dynamic position! <div className={`${styles.notificationContainer} ${position}`}> */}
      <div
        className={`${styles.notificationContainer}`}
        style={{
          bottom: '12px',
          right: '12px',
          transition: 'transform .6s ease-in-out',
          animation: 'toast-in-right 0.7s'
        }}
      >
        {list.map((toast, i) => (
          <Toast {...toast} key={i} />
        ))}
      </div>
    </>
  )
}
export default ToastList
