import { useState } from 'react';

import List from './List';
const LowerState = () => {
  
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List/>
    </section>
  );
};
export default LowerState;
