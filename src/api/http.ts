import { addJwtToLocalStorage } from "../util/auth";
export async function loginFun(loginData: {
  email: string | undefined;
  password: string | undefined;
}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  const response = await fetch("http://localhost:8080/api/auth", requestOptions)
    .then((response) =>
      response.json().then((data) => {
        addJwtToLocalStorage(data.accessToken);
        console.log(data);
      })
    )
    .catch(() => {
      const error = new Error("An error occured while fetching");
      throw error;
    });
  return response;
}
