import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApolloProvider } from '@apollo/react-hooks'
import createApolloClient from './apollo'
import { initializeFontAwesomeIcons } from './assets/icons'
import { DeviceManager } from './contexts/device'
import { MainStack } from './navigation/MainStack'
 
const apolloClient = createApolloClient()
 
export const Main = () => {
 useEffect(() => {
   SplashScreen.hide()
 }, [])
 
 initializeFontAwesomeIcons()
 
 return (
   <ApolloProvider client={apolloClient}>
     <PaperProvider>
       <NavigationContainer>
         <DeviceManager>
           <MainStack />
         </DeviceManager>
       </NavigationContainer>
     </PaperProvider>
   </ApolloProvider>
 )
}
