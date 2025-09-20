import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormStyled from "./LoginForm.styled";
import { authRequest, LoginResponse } from "../../proxy/auth-request";
import { useLocalStorage } from "../../../shared/hooks/useLocalStorage";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setStoredValue: setUser } = useLocalStorage<LoginResponse | null>("user", null);
  const navigate = useNavigate();

  const isEmailValid = username.includes("@gmail.com") || username.trim().length > 3;
  const isPasswordValid = password.trim().length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const data = await authRequest.login(username, password);
      setUser(data); 
      console.log("Guardado en localStorage:", data);
      navigate("/home", { replace: true }); 
    } catch {
      setErrorMessage("Usuario o contraseña inválidos");
    }
  };

  return (
    <LoginFormStyled.FormContainer>
      <LoginFormStyled.Form onSubmit={handleSubmit}>
        <LoginFormStyled.Title>Iniciar Sesión</LoginFormStyled.Title>

        {errorMessage && <LoginFormStyled.ErrorMessage>{errorMessage}</LoginFormStyled.ErrorMessage>}

        <LoginFormStyled.Input
          type="text"
          placeholder="Correo o usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isValid={username === "" ? undefined : isEmailValid}
        />

        <LoginFormStyled.Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={password === "" ? undefined : isPasswordValid}
        />

        <LoginFormStyled.Button type="submit" disabled={!isFormValid}>
          Iniciar Sesión
        </LoginFormStyled.Button>
      </LoginFormStyled.Form>
    </LoginFormStyled.FormContainer>
  );
};

export default LoginForm;
