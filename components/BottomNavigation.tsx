import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from './Home';
import Menu from './Menu';
import About from './About';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Basket from './Basket';

const Tab = createBottomTabNavigator();

const BottonNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главное" component={Home} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}/>

        <Tab.Screen name="Меню" component={Menu} options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='restaurant-menu' size={size} color={color}></MaterialIcons>
          ),}}/>

        <Tab.Screen name="Корзина" component={Basket} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="basket-outline"size={size} color={color}></Ionicons>
          ),}}/>
        
        <Tab.Screen name='О нас' component={About} options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottonNavigation;