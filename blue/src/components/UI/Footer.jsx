import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { SiBigbluebutton } from "react-icons/si";



export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Logo + About */}
          <div className="col-md-4">
            <h4 className="fw-bold text-uppercase mb-3"><SiBigbluebutton /> BLUE</h4>
            <p className="text-secondary">
              Enjoy millions of songs, playlists, and podcasts. Stream your favorite music anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled text-secondary">
              <li><a href="#" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Podcasts</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Trending</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Artists</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold mb-3">Support</h6>
            <ul className="list-unstyled text-secondary">
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Terms</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><FaFacebook /> </a>
              <a href="#" className="text-light fs-5"><AiFillInstagram /> </a>
              <a href="#" className="text-light fs-5"><BsTwitterX /> </a>
              <a href="#" className="text-light fs-5"><IoLogoYoutube /></a>
            </div>

            <p className="text-secondary mt-3">
              Download our app and listen on the go 🎧
            </p>
            <div className="d-flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                width="130"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                width="130"
              />
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} BLUE | All rights reserved.
        </div>
      </div>
    </footer>
  )
}