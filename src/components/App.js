import { Fragment } from "react";
import { Header } from "./Header/Header.jsx";
import { BlogPost } from "./blogList/BlogList.jsx";
import { Footer } from "./footer/Footer.jsx";
import "./App.css";


function App() {
  return (
    <Fragment>
      <Header />
      <BlogPost />
      <Footer />
    </Fragment>
  );
}

export default App;
