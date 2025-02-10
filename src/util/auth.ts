export function addJwtToLocalStorage(token: string, key: string = "jwt"): void {
  try {
    localStorage.setItem(key, token);
  } catch (error) {
    console.error("Error storing JWT in localStorage:", error);
    // Consider handling the error appropriately, e.g., showing a message to the user.
  }
}

export function getJwtFromLocalStorage(key: string = "jwt"): string | null {
  try {
    const token = localStorage.getItem(key);
    return token;
  } catch (error) {
    console.error("Error retrieving JWT from localStorage:", error);
    return null; // Or throw the error if you prefer
  }
}

export function clearJwtFromLocalStorage(key: string = "jwt"): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error clearing JWT from localStorage:", error);
  }
}
