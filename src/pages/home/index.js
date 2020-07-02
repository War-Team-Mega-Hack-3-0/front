import React from 'react';

import Layout from '@vtex/styleguide/lib/Layout'
import Card from '@vtex/styleguide/lib/Card'
import Collapsible from '@vtex/styleguide/lib/Collapsible'

export function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Layout fullWidth>
      <Card>
        <Collapsible
          isOpen={isOpen}
          onClick={() => { setIsOpen(!isOpen) }}
          header="Carai2"
        >
          oia
        </Collapsible>
      </Card>
    </Layout>
  )
}
