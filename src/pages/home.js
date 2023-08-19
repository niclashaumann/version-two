import "./home.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Heart from "../assets/gta-heart.png";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="wrapper-home">
        <div className="text-wrapper-home">
          <p className="title-home">Hi. I’m Niclas Haumann.</p>
          <p>
            <img src={Heart} className="heart-home" alt="Heart"></img> I help
            companies build meaningful and distinctive digital experiences.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
