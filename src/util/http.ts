import { addJwtToLocalStorage } from "../util/auth";
import { clientUrls } from "../api/urls/clientUrls";
import { LoginData } from "../types/LoginData";

export async function loginFun(loginData: LoginData) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  const response = await fetch(
    `${backendUrl}${clientUrls.auth()}`,
    requestOptions
  );
  const data = await response.json();
  addJwtToLocalStorage(data.accessToken);
  return data;
}

export async function signupFun(loginData: LoginData) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  const response = await fetch(
    `${backendUrl}${clientUrls.signup()}`,
    requestOptions
  );
  const data = await response.json();
  return data;
}
