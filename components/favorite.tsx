import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_FAV } from "../config/main";


export async function getFavorite() {
  try {
    const response = await AsyncStorage.getItem(STORAGE_FAV);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}



export async function addFavorite(data: any) {
  try {
    const favorites = await getFavorite();
    favorites.push(data);
    await AsyncStorage.setItem(STORAGE_FAV, JSON.stringify(favorites));
    return true;
  } catch (error) {
    throw error;
  }
}





export async function delFavorite(id: number) {
  try {
    const response = await getFavorite();
    const resultado = response.filter( item => item.id !== id );
    if (resultado) {
      await AsyncStorage.setItem(STORAGE_FAV, JSON.stringify(resultado));
    }
    return true;
  } catch (error) {
    throw error;
  }
}
