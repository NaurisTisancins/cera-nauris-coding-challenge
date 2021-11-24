import React, { useEffect } from 'react'
import styles from './styles.module.css'
import useStore from '../../state/store';

function Modal({carer, closeModal}) {
  const times = useStore(state => state.times);
  const fetchTimes = useStore(state => state.fetchTimes);
  const bookSlot = useStore(state => state.bookSlot);

  useEffect(() => {
    if (times.length === 0) {
      fetchTimes();
    }
    console.log(times)
  }, [])

  const handleClick = () => {
    bookSlot();
    closeModal()
  }
  
  return (
    <div className={styles.modal}>
      <h2>Schedule Carer</h2>
      <span>{carer.name}</span>
      <div>
        {times.map((timeslot, index) => {
          return (
            <button
              key={index}
              onClick={handleClick}
              className={styles.timeslot}>{timeslot}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Modal
