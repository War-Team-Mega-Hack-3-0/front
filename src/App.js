import React from 'react';

import Layout from '@vtex/styleguide/lib/Layout'
import Card from '@vtex/styleguide/lib/Card'

import Collapsible from '@vtex/styleguide/lib/Collapsible'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Layout fullWidth>
      <Card>
        <Collapsible
          isOpen={isOpen}
          onClick={() => { setIsOpen(!isOpen) }}
          header="Carai"
        >
          oi
        </Collapsible>
      </Card>
    </Layout>
  );
}

export default App;
