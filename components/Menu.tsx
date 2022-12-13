import { useState } from 'react'
import { View, Text, StyleSheet, SectionList, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import IDish from '../Models/IDish'
import styles from '../style'

const dishList: IDish[] = [
  {
    id: 1,
    name: "Блюдо 1",
    description: "Описание"
  },
  {
    id: 2,
    name: "Блюдо 2",
    description: "Описание"

  },
  {
    id: 3,
    name: "Блюдо 3",
    description: "Описание"
  },

  {
    id: 4,
    name: "Блюдо 4",
    description: "Описание"
  }
] 

const Menu = () => {
  return (
    <View style = {styles.menuStyle}>
      <ScrollView>
        {dishList.map(item => 
        <View key={item.id} style={styles.backgroundMenu} >
          <Text style = {styles.dishName}>      
            {item.name} 
          </Text>
          <Text style = {styles.dishDescription} key={item.id}>
            {item.description}
          </Text>
          <TouchableOpacity style= {styles.buttonAdd}>
            <Text style={{fontSize: 30}}>В корзину</Text>
          </TouchableOpacity>
      </View>)}
      </ScrollView>
      
    </View>
  
  )
}



export default Menu;