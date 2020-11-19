import React, { useState, useEffect } from 'react'
import Toast from './Toast'
import styles from './Toast.module.css'

const ToastList = (props) => {
  const { toastList, position } = props
  const [list, setList] = useState(toastList)

  useEffect(() => {
    setList(toastList)
  }, [toastList, list])

  const onDelete = (key: Number) => {
    const index = list.findIndex((e) => e.key === key)
    list.splice(index, 1)
    setList([...list])
  }

  let positionStyle: string
  switch (position) {
    case 'topLeft':
      positionStyle = styles.topLeft
      break
    case 'bottomLeft':
      positionStyle = styles.bottomleft
      break
    case 'bottomRight':
      positionStyle = styles.bottomRight
      break
    case 'topRight':
    default:
      positionStyle = styles.topRight
      break
  }

  return (
    <>
      <div className={`${styles.notificationContainer} ${positionStyle}`}>
        {list.map((toast, key) => (
          <Toast
            {...toast}
            key={key}
            onDelete={() => {
              onDelete(key)
            }}
          />
        ))}
      </div>
    </>
  )
}
export default ToastList
