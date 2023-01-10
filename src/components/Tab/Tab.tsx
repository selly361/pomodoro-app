import { useAppDispatch, useAppSelector } from 'app/hooks';

import { ITab } from 'types/stateType'
import React from 'react'
import { StyledTab } from './styles'
import { setTab } from 'features/pomodoroSlice';

interface Props {
    tab: ITab;
    value: "pomodoro" | "short break" | "long break"
}


function Tab({ tab, value }: Props) {
    const currentTab = useAppSelector(state => state.currentTab)
    const dispatch = useAppDispatch()
    const className = currentTab === tab ? "active" : ''

    const handleTabClick = () => {
        dispatch(setTab(tab))
    }

  return (
    <StyledTab className={className} onClick={handleTabClick}>
        {value}
    </StyledTab>
  )
}

export default Tab