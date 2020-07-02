import React from 'react'

import Layout from '@vtex/styleguide/lib/Layout'
import Card from '@vtex/styleguide/lib/Card'
import Collapsible from '@vtex/styleguide/lib/Collapsible'

import { useSelector, useDispatch } from 'react-redux'
import { AuthSelectorState } from '../../redux/auth/selectors'
import { signInSuccess } from '../../redux/auth/actions'

export function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const authState = useSelector(AuthSelectorState)
  const dispatch = useDispatch()
  return (
    <Layout fullWidth>
      <Card>
        {JSON.stringify(authState)}
        <button onClick={() => { dispatch(signInSuccess('teste', {})) }}>oi</button>
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
