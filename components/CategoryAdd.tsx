import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from '../style';


const CategoryAdd = () => {
  const [text, onChangeText] = useState('Введите название');
  const [number, onChangeNumber] = useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={style.inputCategory}
        onChangeText={onChangeText}
        value={text}
      />

    </SafeAreaView>
  )
}

export default CategoryAdd;