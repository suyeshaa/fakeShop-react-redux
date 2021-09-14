import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <ProductListing />
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
        <Route>404 Not Found!</Route>
      </Switch>
    </div>
  );
}

export default App;
