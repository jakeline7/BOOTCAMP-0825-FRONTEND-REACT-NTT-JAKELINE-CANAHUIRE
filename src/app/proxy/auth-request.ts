export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

const authApiUrl = "https://dummyjson.com/auth/login";

export const authRequest = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await fetch(authApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Credenciales inválidas");

    return await response.json();
  },
};
