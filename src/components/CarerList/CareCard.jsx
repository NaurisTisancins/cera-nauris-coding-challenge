import React, { useState, useRef } from 'react'
import styles from './styles.module.css';
import Modal from '../Modal/Modal'
import { useEffect } from 'react/cjs/react.development';

function CareCard(props) {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const { carer } = props;

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return
    }
    setIsOpen(false);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  
  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick);

    return () => {
      getClick()
    }
  }, [])
  
  return (
    
      <div className={styles.carercard} ref={outside}>
        <img src={carer.photo} alt="profile of a carer" />
        <div className={styles.description}>
          <div>
            <p>{carer.name}</p>
            <span>{`${carer.slots} slots vailable`}</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            Check Availability
          </button>
        </div>
        {isOpen ?
        (<Modal carer={carer} closeModal={closeModal}/>) : ''}

      </div>
    
  )
}

export default CareCard
