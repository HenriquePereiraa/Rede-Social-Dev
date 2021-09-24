import { ThemeProvider } from "@material-ui/core//styles";
import theme from "./theme";
import Homes from "./pages/Home/Home";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./mock";
import GuestRouter from "./routes/GuestRouter";
import store from "./store";
import { Provider } from "react-redux";
import Auth from "./components/Auth";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <GuestRouter path="/signin" element={<Signin />} />
              <Route path="//*" element={<Homes />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
