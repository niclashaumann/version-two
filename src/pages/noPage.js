import { Helmet } from "react-helmet";
import "./noPage.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Error from "../assets/404.gif";

export default function NoPage() {
  return (
    <div>
      <Helmet>
        <title>Niclas Haumann - 404</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Niclas Haumann - 404" />
      </Helmet>
      <div>
        <Header />
      </div>
      <div className="wrapper-error">
        <img src={Error} className="error-nopage" alt="404" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
