import { Helmet } from "react-helmet";
import "./contact.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Phone from "../assets/phone.gif";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Niclas Haumann - Contact</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Niclas Haumann - Contact" />
      </Helmet>
      <div>
        <Header />
      </div>
      <div className="wrapper-contact">
        <div className="text-wrapper-contact">
          <div className="gif-contact">
            <img src={Phone} className="phone-contact" alt="Phone" />
          </div>
          <div className="experience-wrapper-contact">
            <div className="experience-contact">
              <p className="title-contact">Contact</p>
              <p className="title-contact">Social</p>
            </div>
            <div className="experience-contact">
              <p>
                <a href="mailto:niclashaumann@icloud.com">
                  niclashaumann@icloud.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/niclashaumann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="experience-contact">
              <p>
                <a href="tel:+4540590995">+45 40590995</a>
              </p>
              <p>
                <a
                  href="https://music.apple.com/profile/niclashaumann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Music
                </a>
              </p>
            </div>
            <div className="experience-contact">
              <p></p>
              <p>
                <a
                  href="https://www.instagram.com/niclashaumann/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
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
