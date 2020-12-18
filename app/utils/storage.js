import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @param string
 */
export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@userData', value);
  } catch (error) {
    console.log(error);
  }
};
/**
 * @returns object
 */
export const getData = async () => {
  try {
    const item = await AsyncStorage.getItem('@userData');
    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};
export const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@userData');
  } catch (error) {
    console.log(error);
  }
};
