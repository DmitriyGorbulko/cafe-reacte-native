import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { IAuthRequest } from '../api/models/Interfaces';
import { useNavigation } from '@react-navigation/native';
import { AuthContext, useAuth } from '../api/service/Auth';
import Field from './ui/Field';

const Registration: FC = () => {
  const { register, error, clearError } = useAuth();

  const navigation = useNavigation();

  const [data, setData] = useState<IAuthRequest>({
    username: '',
    password: '',
  });

  const regitrationHandler = () => {
    clearError();
    const result = register(data);

    if (result) Alert.alert('Пользователь успешно зарегестрирован');
  };

  useEffect(() => {
    clearError();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Зарегистрироваться</Text>
        <Field
          onChange={value => {
            setData({ ...data, username: value });
          }}
          value={data.username}
          placeholder="Логин"
          style={styles.input}
        />
        <Field
          onChange={value => {
            setData({ ...data, password: value });
          }}
          value={data.password}
          placeholder="Пароль"
          isSecure={true}
          style={styles.input}
        />
        {error && <Text>{error}</Text>}
        <Pressable style={{ marginTop: 10 }} onPress={regitrationHandler}>
          <Text>Зарегистрироваться</Text>
        </Pressable>
      </View>

      <TouchableOpacity
        style={{ width: '80%' }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.bottomText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  bottomText: {
    marginTop: 10,
    textAlign: 'right',
    opacity: 0.5,
    fontSize: 15,
  },
  input: {
    marginTop: 10,
  },
});

export default Registration;
