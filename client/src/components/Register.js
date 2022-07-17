import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adduser } from "../service/api";
import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 40px;
  }
`;
const Register = () => {
  const navigate = useNavigate();
  const defaultValue = {
    username: "",
    email: "",
    password: "",
    reenterPassword: "",
  };
  const [user, setUser] = useState(defaultValue);
  const onValueChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const AddUserDetails = async () => {
    const { username, email, password, reenterPassword } = user;
    if (username && email && password && password === reenterPassword) {
      await adduser(user);
      alert("User Registered Successfully");
      navigate("/");
    } else {
      alert("invalid input");
    }
  };
  return (
    <Container>
      <Typography variant="h4">Sign Up</Typography>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input name="username" onChange={(e) => onValueChange(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          name="email"
          onChange={(e) => {
            onValueChange(e);
          }}
        />
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
        <InputLabel>Re-Enter Password</InputLabel>
        <Input
          name="reenterPassword"
          onChange={(e) => {
            onValueChange(e);
          }}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            AddUserDetails();
          }}
        >
          Register
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
