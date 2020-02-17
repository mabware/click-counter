import React, { useState } from 'react';
import { Button } from 'antd';

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <div id="count" style={{ padding: '16px' }}>
        Clicks:
        {' '}
        {clicks}
      </div>
      <Button type="primary" onClick={() => setClicks(clicks + 1)}>
        +1
      </Button>
    </>
  );
};

export default ClickCounter;
