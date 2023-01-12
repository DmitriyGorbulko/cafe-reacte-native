import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ICategoryDish } from '../api/models/Interfaces';
import axios from 'axios';
import styles from '../style';
import Menu from './Menu';

const Category = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({} as ICategoryDish[]);

  const getDish = async () => {
    setIsLoading(true);
    await axios.get("http://192.168.0.155:5000/get_all_category_dishes")
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
  
  setTimeout(() => {
    
  }, 2000);

  return (
    <View style = {styles.menuStyle}>
      <ScrollView>
        {resp?.map(item => 
        <View key={item.id} style={styles.backgroundMenu} >
          <TouchableOpacity style= {styles.buttonAdd}>
            <Text style={{fontSize: 30}}> 
              {item.title} 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{backgroundColor: "red", fontSize: 30}}> 
              Удалить
            </Text>
          </TouchableOpacity>
      </View>)}
      <TouchableOpacity>
            <Text style={{fontSize: 30}}> 
              +Добавить категорию 
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  
  )
}

export default Category;