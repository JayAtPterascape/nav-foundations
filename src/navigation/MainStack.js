import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// custom hooks
import { useAuth } from '../apollo/hooks'

// custom components
import { QueryIsNotReady } from '../components/QueryIsNotReady'

// nested navigators and some screens
import { AuthStack } from './AuthStack'
import { CalendarStack } from './CalendarStack'
import { EventScreen } from '../screens/event/EventScreen'
import { HouseholdStack } from './HouseholdStack'
import { MainMenuScreen } from '../screens/mainmenu/MainMenuScreen'
import { MessagesScreen } from '../screens/messages/MessagesScreen'
import { OnBoardStack } from './OnBoardStack'
import { ProfileStack } from './ProfileStack'
import { RefereeStack } from './RefereeStack'
import { TeamsStack } from './TeamsStack'

// global literals for screen names
import { screenNames } from './screenNames'
const {
  MAIN_AUTH,
  MAIN_CALENDAR,
  MAIN_EVENT,
  MAIN_HOUSEHOLD,
  MAIN_MENUSCREEN,
  MAIN_MESSAGES,
  MAIN_ONBOARD,
  MAIN_PROFILE,
  MAIN_REFEREE,
  MAIN_TEAMS
} = screenNames

const Main = createStackNavigator()

export const MainStack = () => {
  const { loading, error, auth } = useAuth()

  if (loading || error)
    return <QueryIsNotReady loading={loading} error={error} typeName="user" />

  // rendering different version of navigator component helps to empty out earlier values
  if (!auth)
    return (
      <Main.Navigator headerMode="none">
        <Main.Screen name={MAIN_AUTH} component={AuthStack} />
      </Main.Navigator>
    )

  return (
    <Main.Navigator headerMode="none">
      <Main.Screen name={MAIN_ONBOARD} component={OnBoardStack} />
      <Main.Screen name={MAIN_MENUSCREEN} component={MainMenuScreen} />
      <Main.Screen name={MAIN_CALENDAR} component={CalendarStack} />
      <Main.Screen name={MAIN_EVENT} component={EventScreen} />
      <Main.Screen name={MAIN_HOUSEHOLD} component={HouseholdStack} />
      <Main.Screen name={MAIN_MESSAGES} component={MessagesScreen} />
      <Main.Screen name={MAIN_PROFILE} component={ProfileStack} />
      <Main.Screen name={MAIN_REFEREE} component={RefereeStack} />
      <Main.Screen name={MAIN_TEAMS} component={TeamsStack} />
    </Main.Navigator>
  )
}
