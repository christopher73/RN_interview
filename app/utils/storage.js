import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  const jsonValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem('@userData', jsonValue);
    return true;
  } catch (error) {
    return false;
  }
};
export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@userData');
    return value === null ? null : value;
  } catch (error) {
    console.log(error);
  }
};
