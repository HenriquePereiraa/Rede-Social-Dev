//todos os serviçoes de autenticação
import axios from "../utils/axios";

class AuthService {
  signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/login", { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setToken('JWT');
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/home/me")//enivo o token pelo header
        .then((response) => {
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  setToken = (token) => {
    localStorage.setItem("acessToken",token);
  };

  getToken = () => localStorage.getItem('acessToken')

  isAuthenticated = () => {
    return !!this.getToken();
  };

  removeToken = () => {
    localStorage.removeItem('acessToken');
  }


  signOut = () => {
    this.removeToken();
  }
}

const authService = new AuthService();

export default authService;
