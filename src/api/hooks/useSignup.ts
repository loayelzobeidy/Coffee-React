import { SignupData } from "../../types/SignupData";
import { signupFun } from "../../util/http";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
    return useMutation({
      mutationFn: (data: SignupData) => signupFun(data),
    });
  };