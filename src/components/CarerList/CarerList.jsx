import React, {useEffect} from 'react'
import useStore from '../../state/store';

function CarerList() {
  const carers = useStore(state => state.carers);
  const fetchCarers = useStore(state => state.fetchCarers);

  useEffect(() => {
    if (carers.length === 0) {
      fetchCarers();
    }
  }, [fetchCarers]);
  
  return (
    <div>
      <p>we have {carers.length} carers currently available</p>
      <ul>
        {carers.map((carer) => {
          return <div>{carer.name}</div>
        })}
      </ul>
    </div>
  )
}

export default CarerList;
