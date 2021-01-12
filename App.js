import * as React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/Home'
import Search from './screens/Search'


const Tab = createBottomTabNavigator();

export default function Home() {
  return (

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home'
                if(focused){
                  size = size+2
                }

              } else if (route.name === 'Search') {
                iconName = 'search'
                if(focused){
                  size = size+2
                }
              }
             

              // You can return any component that you like here!
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              )
            },
          })}
          tabBarOptions={{
            // activeBackgroundColor: "#ADD8E6",
            activeTintColor: '#3159cc',
            inactiveTintColor: 'gray',
            // keyboardHidesTabBar: true,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>

  );
}