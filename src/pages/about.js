import "./about.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="wrapper-about">
        <div className="text-wrapper-about">
          <div className="text-about">
            <p>Passioned project manager. Born and bred in Copenhagen.</p>
            <br></br>
            <p>
              Currently working at{" "}
              <a
                href="https://www.noaignite.dk"
                target="_blank"
                rel="noopener noreferrer"
              >
                NoA Ignite
              </a>
              , where I, together with some of the greatest creative and
              technical people in the business, help companies build meaningful
              and distinctive digital experiences.
            </p>
          </div>
          <div className="wrapper-experience-about">
            <p className="title-experience-about">Experience</p>
            <div className="experience-about">
              <p>Producer, NoA Ignite</p>
              <p className="dates-about">
                2022 - <span className="current-about">present</span>
              </p>
            </div>
            <div className="experience-about">
              <p>Junior producer, Noa Agnite</p>
              <p className="dates-about">2021 - 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
