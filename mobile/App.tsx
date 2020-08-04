import React from 'react';
import { StatusBar } from 'react-native';
import {AppLoading} from 'expo'; 
import {useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


import Routes from './src/routes'; 

export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Roboto_400Regular, 
      Roboto_500Medium, 
      Ubuntu_700Bold
    }
  ); 
  if(!fontsLoaded)
  {
    console.log('alabimba');
    return <AppLoading/>
  }
  return (
  <>
   <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
   <Routes/>
  </>
  );
}

