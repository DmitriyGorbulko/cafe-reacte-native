import React, { createContext, FC, useContext, useMemo, useState } from 'react';
import { IAuthRequest, IPerson } from '../models/Interfaces';
import { personsDb } from './PersonsDb';

interface IContext {
  person: IPerson | null | undefined;
  login: (authRequest: IAuthRequest) => void;
  register: (regRequest: IAuthRequest) => boolean;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<any> = ({ children }) => {
  const [person, setPerson] = useState<IPerson | null>();

  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const register = (regRequest: IAuthRequest): boolean => {
    if (personsDb.find(x => x.username === regRequest.username)) {
      setError('Пользователь уже существует');
      return false;
    }

    personsDb.push(regRequest);
    setPerson(regRequest);
    return true;
  };

  const login = (authRequest: IAuthRequest) => {
    const person = personsDb.find(
      x =>
        x.username === authRequest.username &&
        x.password === authRequest.password
    );
    console.log(person);

    if (!person) {
      setError('Неправильный логин или пароль');
    } else {
      setPerson(person);
    }
  };

  const logout = async () => {
    setPerson(null);
  };

  const value = useMemo(
    () => ({
      person,
      error,
      clearError,
      login,
      register,
      logout,
    }),
    [person, error, setError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
