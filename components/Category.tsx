import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ICategoryDish, IDish } from '../api/models/Interfaces';
import axios from 'axios';
import styles from '../style';
import Menu from './Menu';
import Field from './ui/Field';

const Category = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IDish[]>();


  const DeleteHandler = async (id: number) => {
    DeleteDish(id);
    getDish();
  } 

  const getDish = async () => {
    setIsLoading(true);
    await axios.get("http://localhost:5000/get_all_dishes")
        .then(response => {
            console.log('getting data from axios', response.data);
            setIsLoading(false);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
  }

  const DeleteDish = async (id: number) => {
    setIsLoading(true);
    await axios.delete(`http://192.168.43.180:5000/delete_dish?id=${id}`)
        .then(response => {
           console.log('ok');
            
        })
        .catch(error => {
            console.log(error);
        });
  }


    useEffect(() =>{
      getDish();
      DeleteDish;
    }, [setData])


  // const resp = data;

  return (
    <View style = {styles.menuStyle}>
      
      <ScrollView>
        
        {data?.map((item, key) => (<View key={item.id} style={styles.backgroundMenu} >
          <TouchableOpacity style= {styles.buttonAdd} >
            <Text style={{fontSize: 30}}> 
              {item?.title} 
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 16}}> 
              {item?.description} 
            </Text>
          <TouchableOpacity onPress={ () => DeleteHandler(item.id)}>
            <Text style={{backgroundColor: "red", fontSize: 30}}> 
              Удалить
            </Text>
          </TouchableOpacity>
      </View>))}
        
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