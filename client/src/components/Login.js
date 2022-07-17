import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const defaultValue = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginbutton = async () => {
    console.log(user);
    await loginuser(user, setLoginUser);
    navigate("/");
  };
  const signup = () => {
    navigate("/register");
  };
  return (
    <Container>
      <Typography variant="h4">Sign In</Typography>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" onChange={(e) => onValueChange(e)} />
      </FormControl>

      <FormControl>
        <InputLabel>Password</InputLabel>

        <Input
          name="password"
          onChange={(e) => {
            onValueChange(e);
          }}
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            loginbutton();
          }}
        >
          Log In
        </Button>

        <Typography>or</Typography>
        <Button
          variant="contained"
          onClick={() => {
            signup();
          }}
        >
          Sign Up
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
