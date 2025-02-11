import { addJwtToLocalStorage } from "../util/auth";
import { clientUrls } from "../api/urls/clientUrls";
export async function loginFun(loginData: {
  email: string | undefined;
  password: string | undefined;
}) {
 const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  const response = await fetch(`${backendUrl}${clientUrls.auth()}`, requestOptions)
    .then((response) =>
      response.json().then((data) => {
        addJwtToLocalStorage(data.accessToken);
      })
    )
    .catch(() => {
      const error = new Error("An error occured while fetching");
      throw error;
    });
  return response;
}
