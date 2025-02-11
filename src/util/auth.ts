export function addJwtToLocalStorage(token: string, key: string = "jwt"): void {
  try {
    localStorage.setItem(key, token);
  } catch (error) {
    console.error("Error storing JWT in localStorage:", error);
  }
}

export function getJwtFromLocalStorage(key: string = "jwt"): string | null {
  try {
    const token = localStorage.getItem(key);
    return token;
  } catch (error) {
    console.error("Error retrieving JWT from localStorage:", error);
    return null;
  }
}

export function clearJwtFromLocalStorage(key: string = "jwt"): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error clearing JWT from localStorage:", error);
  }
}
