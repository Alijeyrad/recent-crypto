import React from "react";
import "./App.css";
import Table from "../Table/Table";
import Layout from "../Layout/Layout";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>

            <Route exact path="/">
              <Table />
              <Footer />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
