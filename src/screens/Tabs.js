import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import BottomNavigaton from '../components/BottomNavigaton';

export default function Tabs() {

const navigation = useNavigation();



useEffect(()=> {
navigation.setOptions({
    headerShown:false,
  });
}, []);
  
  
return (
    <NavigationContainer independent={true}>
        <BottomNavigaton />
    </NavigationContainer>
)
}
