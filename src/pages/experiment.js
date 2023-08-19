import "./experiment.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Confused from "../assets/confused.gif";
import Smile from "../assets/smile.gif";

export default function Experiment() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="wrapper-experiment">
        <div className="text-wrapper-experiement">
          <div className="text-experiment">
            <p>
              This website serves as an experiment in learning to design and
              develop a website.
            </p>
            <br></br>
            <p>
              I change it from time to time as I progress. It may, therefore,
              very well be the last time you see it looking like this.
            </p>
          </div>
          <div className="gif-experiment">
            <img
              src={Confused}
              className="confused-experiment"
              alt="Confused"
            />
            <img src={Smile} className="smile-experiment" alt="Smile" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
