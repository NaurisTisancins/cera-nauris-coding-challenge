import React, { useEffect } from 'react'
import useStore from '../../state/store';
import styles from './styles.module.css';

function CarerList() {
  const carers = useStore(state => state.carers);
  const fetchCarers = useStore(state => state.fetchCarers);

  useEffect(() => {
    if (carers.length === 0) {
      fetchCarers();
    }
  }, [fetchCarers, carers.length]);

  return (
    <div className={styles.main}>

      {carers.map((carer, index) => {
        return (
          <div className={styles.carercard} key={index}>
            <img src={carer.photo} alt="profile of a carer"/>
            <div className={styles.description}>
              <div>
                <p>{carer.name}</p>
                <span>{`${carer.slots} slots vailable`}</span>
              </div>
              <button>
                Check Availability
              </button>
            </div>
            
          </div>
        )
      })}

    </div>
  )
}

export default CarerList;
