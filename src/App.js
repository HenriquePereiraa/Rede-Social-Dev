import { ThemeProvider } from "@material-ui/core//styles";
import theme from "./theme";
import Homes from "./pages/Home/Home";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./mock";
import GuestRouter from "./routes/GuestRouter";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homes />} />
            <GuestRouter path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
