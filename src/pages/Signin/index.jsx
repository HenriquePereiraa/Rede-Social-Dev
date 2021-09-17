import { Typography, Grid, Box, Avatar, Button, Link } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import palette from "../../theme/palette";
import { TextField } from "@material-ui/core/";

function CopyRight() {
    return(
        <Typography align="center" variant="body2">
            Copyright &copy;
            {'' + new Date().getFullYear()}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding:'2px',
    textAlign:'center'
  },
  avatar: {
    background: palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    margin:"8px 0",
  },
  form: {
      margin:"4px",
  }
}));

const Signin = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        md={7}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.image}
      >
        <Typography style={{ color: "#fff", fontSize: 25, lineHeight: "45px" }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgba(255,255,255,0.7)",
            marginTop: 10,
            fontSize: 16,
            lineHeight: "30px",
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>

          <Typography variant="h6">Acesso</Typography>

          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              type="password"
              autoComplete="current-password"
              autoFocus
            />

            <Button
              className={classes.button}
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>

            <Grid container>
                <Grid item>
                    <Link>Esqueceu sua Senha</Link>
                </Grid>

                <Grid item>
                    <Link>Não tem uma conta? Registre-se</Link>
                </Grid>
            </Grid>
          </form>
        <CopyRight/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signin;
