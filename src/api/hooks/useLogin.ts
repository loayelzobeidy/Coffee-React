import { LoginData } from "../../types/LoginData";
import { loginFun } from "../../util/http";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation({
      mutationFn: (data: LoginData) => loginFun(data),
    });
  };