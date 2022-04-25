const API_HOST = 'https://kitsu.io/api/edge/categories/1';

export async function getAllAmime(endpointUrl: string) {
  try {
    const url = `${API_HOST}/anime`;
    const response = await fetch(endpointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAllManga(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id: number) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
