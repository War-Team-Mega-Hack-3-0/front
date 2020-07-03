import React from 'react'

import Layout from '@vtex/styleguide/lib/Layout'
import Card from '@vtex/styleguide/lib/Card'
import Collapsible from '@vtex/styleguide/lib/Collapsible'
import Button from '@vtex/styleguide/lib/ButtonPlain'
import Divider from '@vtex/styleguide/lib/Divider'

import SelectableCard from '@vtex/styleguide/lib/SelectableCard'

import { useSelector, useDispatch } from 'react-redux'
import { AuthSelectorState } from '../../redux/auth/selectors'
import { signInSuccess } from '../../redux/auth/actions'

import styled from 'styled-components'

import { askForPermissionToReceiveNotifications } from '../../services/firebase'

const Space = styled.div`
margin: 2rem 0;
`

export function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const authState = useSelector(AuthSelectorState)
  const dispatch = useDispatch()
  return (
    <Layout fullWidth>
      <Card>
        {JSON.stringify(authState)}
        <Button
          type="button"
          size="large"
          // isLoading
          // disabled
          variation="secondary"
          onClick={askForPermissionToReceiveNotifications}>oi</Button>
        <Space />

        <Divider />
        <Space />
        <Collapsible
          isOpen={isOpen}
          onClick={() => { setIsOpen(!isOpen) }}
          header="Carai2"
        >
          oia
        </Collapsible>

        <Space />
        <SelectableCard selected>
          <div className="pa7">
            <div className="f3 tc">Card 1</div>
          </div>
        </SelectableCard>
      </Card>
    </Layout>
  )
}
