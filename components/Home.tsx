import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Test } from '../api/service/Test';
import { useAuth } from '../api/service/Auth';

const Home = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Pressable onPress={logout}>
        <Text>Выйти из аккаунта</Text>
      </Pressable>
      <Test />
    </View>
  );
};

export default Home;
