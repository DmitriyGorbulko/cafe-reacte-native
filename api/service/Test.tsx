import { View, Text, Button, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {IDish} from '../models/Interfaces';

export const Test = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({} as IDish[]);

    const getDish = async () => {
        setIsLoading(true);
        await axios.get("http://192.168.0.155:5000/get_all_dishes")
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

    // const resp = data?.map(item => 
    //     <View key={item.id}>
    //         <Text>{item.title}</Text>
    //         <Text>{item.description}</Text>
    //     </View>);

    return (
        <View>
            {/* <Text>{data.title}</Text> */}
            {/* {resp} */}
        </View>
    )
}