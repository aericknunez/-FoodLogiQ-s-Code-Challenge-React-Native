export const URL_PATH = 'https://kitsu.io/api/edge';
export const STORAGE:string = '@storage_Key';
export const STORAGE_FAV:string = '@storage_Key_favorites';

export function getUrlFormated(endpointUrl: string) {
  const urlFormated = URL_PATH + '/1/' + endpointUrl;
  return urlFormated;
}


export async function getData(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
