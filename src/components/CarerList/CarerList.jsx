import React, { useEffect, useState} from 'react'
import useStore from '../../state/store';
import styles from './styles.module.css';
import CarerCard from './CareCard';

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
          <CarerCard carer={carer} key={index} />
        )
      })}

    </div>
  )
}

export default CarerList;
