import { ThemeProvider } from "@material-ui/core//styles";
import theme from './theme'
import Homes from "./pages/Home/Home";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={Homes}/>
        <Route path="/signin" exact component={Signin}/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
