import React from 'react'
import { StyledTabs } from './styles'
import { Tab } from 'components'
import { tabs } from 'data/tabs'

function Tabs() {
  
  return (
    <StyledTabs>
      {tabs.map(data => <Tab key={data.tab} tab={data.tab} value={data.value} />)}
    </StyledTabs>
  )
}

export default Tabs