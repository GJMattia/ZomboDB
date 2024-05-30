import AsyncStorage from '@react-native-async-storage/async-storage';
import * as usersAPI from './user-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  await AsyncStorage.setItem('token', token); // Use AsyncStorage instead of localStorage
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  await AsyncStorage.setItem('token', token); // Use AsyncStorage instead of localStorage
  return getUser();
}

export async function logOut() {
  await AsyncStorage.removeItem('token'); // Use AsyncStorage instead of localStorage
}

const base64UrlDecode = (str) => {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  // Pad with '=' to make the length a multiple of 4
  while (base64.length % 4) {
    base64 += '=';
  }
  return atob(base64);
};

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(base64UrlDecode(token.split('.')[1]));
    if (payload.exp * 1000 < Date.now()) {
      await AsyncStorage.removeItem('token');
      return null;
    }
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
}

export async function getUser() {
  const token = await getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr));
}
