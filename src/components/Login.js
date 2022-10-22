import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: "admin",
        password: "admin",
        loggedIn: true,
      })
    );
  };
  return (
    <>
      <div className="login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Login</h1>
          <div style={{ padding: 30 }}>
            <Paper style={{ padding: 30 }}>
              <Grid
                container
                spacing={3}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth type="submit">
                    {" "}
                    Login{" "}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
