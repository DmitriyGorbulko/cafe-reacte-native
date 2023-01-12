import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {IDish} from '../models/Interfaces';

export const Category = () => {    
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({} as IDish);

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
    
     return (
        <View>
            <View style={{ margin: 18 }}>
                    <Button
                        title={'Click using axios'}
                        onPress={() => {getDish()}}
                        color='green'
                    />
            </View>
        </View>
    )
}