import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FaceBookScreen from './screens/facebook'
import InstaScreen from './screens/instagram'





export default  class App extends React.Component{
render(){
return(

    <AppContainer/>

    
)


}
}

const TabNavigator=createBottomTabNavigator({
FaceBook:FaceBookScreen,
Instagram:InstaScreen

})

const AppContainer = createAppContainer(TabNavigator)
