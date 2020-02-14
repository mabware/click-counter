import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <div id="count" style={{ padding: '16px' }}>
        Clicks:
        {' '}
        {clicks}
      </div>
      <Button onClick={() => setClicks(clicks + 1)}>
        +1
      </Button>
    </>
  );
};

export default ClickCounter;
