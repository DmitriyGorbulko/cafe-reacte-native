import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SectionList, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { IDish } from '../api/models/Interfaces'
import styles from '../style'

// const dishList: IDish[] = [
//   {
//     id: 1,
//     title: "Блюдо 1",
//     description: "Описание",
//     recipe: undefined,
//     categoryDish: undefined,
//     categoryDishId: undefined

//   },
//   {
//     id: 2,
//     title: "Блюдо 2",
//     description: "Описание",
//     recipe: undefined,
//     categoryDish: undefined,
//     categoryDishId: undefined
//   },
//   {
//     id: 3,
//     title: "Блюдо 3",
//     description: "Описание",
//     recipe: undefined,
//     categoryDish: undefined,
//     categoryDishId: undefined
//   },

//   {
//     id: 4,
//     title: "Блюдо 4",
//     description: "Описание",
//     recipe: undefined,
//     categoryDish: undefined,
//     categoryDishId: undefined
//   }
// ] 

// const resp = data?.map(item => 
//   <View key={item.id}>
//       <Text>{item.title}</Text>
//       <Text>{item.description}</Text>
//   </View>);

const Menu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({} as IDish[]);

  const getDish = async () => {
    setIsLoading(true);
    await axios.get('http://192.168.0.155:5000/get_dish_by_category_id?id=1')
        .then(response => {
            console.log('getting data from axios', response.data);
            setIsLoading(false);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
  }
  useEffect(() =>{
    getDish();
  }, [setData])

  const resp = data;

  return (
    <View style = {styles.menuStyle}>
      <ScrollView>
        {resp?.map(item => 
        <View key={item.id} style={styles.backgroundMenu} >
          <Text style = {styles.dishName}>      
            {item.title} 
          </Text>
          <Text style = {styles.dishDescription} key={item.id}>
            {item.description}
          </Text>
          <TouchableOpacity style= {styles.buttonAdd}>
            <Text style={{fontSize: 20}}>В корзину</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{backgroundColor: "red", fontSize: 20}}>Удалить</Text>
          </TouchableOpacity>
          
      </View>)}
      <TouchableOpacity>
        <Text style={{fontSize: 20}}>+Добавить</Text>
      </TouchableOpacity>
      </ScrollView>
      
    </View>
  
  )
}



export default Menu;