import { useEffect, useRef, useState } from "react";
import Axios from "axios";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container" id="container">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#social">Currently</a>
          </li>
        </ul>
        <br></br>

        <div className="upper" id="home">
          <label>
            <h1 style={{ margin: "5%" }}>Dulran Samarasinghe</h1>
          </label>

          <label>
            <p style={{ fontSize: "x-large" }}>
              18 Year Old Undergraduate FullStack Web Developer/Enthusiast from
              Colombo, Sri Lanka.
            </p>
            <br></br>
            <img
              src="https://www.shutterstock.com/image-vector/cute-orange-cat-waving-paw-260nw-1973250101.jpg"
              style={{ float: "right", margin: "5%" }}
              alt="Image of Veloxal"
            ></img>
          </label>
        </div>

        <div className="middle" id="projects">
          <h1>Projects</h1>
          <p style={{ fontSize: "x-large" }}>
            I'm a 2nd CS Student at
            <a href="https://www.iit.ac.lk/"> IIT</a>. Currently my projects are
            small scale ones. however with experience I do intend on moving onto
            larger projects. I have beginner/intermediate level of working
            experience with the MERN stack and recently got started with
            Flutter.
          </p>

          <button className="button-17">
            <a href="mailto:dulransamarasinghe3@gmail.com">Contact Me</a>
          </button>
          <div className="projects">
            <h1>
              <button className="button-17">
                {" "}
                <a
                  href="https://github.com/DulranSam"
                  style={{ textAlign: "center" }}
                >
                  Find Me On GitHub
                </a>
              </button>
            </h1>
            <div className="card">
              <label>
                <h1>Veloxal</h1>
                <a href="https://github.com/DulranSam/VeloxalOnlineStoreMobileApp">
                  View
                </a>
                <p>
                  An mobile application that i'm developing , as i'm learning
                  Flutter
                </p>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Online Store Project</h1>
                <a href="https://github.com/DulranSam/Online-Store-Project">
                  View
                </a>
                <p>
                  The project where I first learned about routing and making
                  CRUD operations to the Cluster (MongoDB) , where I also gained
                  a lot of knowledge on how to work with ReactJS
                </p>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Movie Trailers</h1>
                <a href="https://github.com/DulranSam/Film-Trailers">View</a>
                <p>
                  Project created using the MERN stack , to make CRUD operations
                  from the frontend to handle appropriately
                  <a href="yts.am">YTS</a>
                </p>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Movie Torrent Downloader</h1>
                <a href="https://github.com/DulranSam/MovieTorrentDownload">
                  View
                </a>
                <p>
                  My first MERN Project , which was created without MongoDB.
                  Using a free api provided by <a href="yts.am">YTS</a>
                </p>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Friends API</h1>
                <a href="https://github.com/DulranSam/Friends-API">View</a>
                <p>An basic API I made using Express as a mini side project</p>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Image Generation with GPT</h1>
                <p>
                  Mini Side Project created using Chat-GPT's api , specifically
                  to make a post request for frontend requests to generate
                  number of ai images requested by user
                </p>
                <a href="https://github.com/DulranSam/imagegenarationwithgpt">
                  View
                </a>
                <br></br>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Crpyto Conversion Mini Project</h1>
                <p>
                  Created using <a href="coinapi.com">Coin Api</a>
                </p>
                <a href="https://github.com/DulranSam/CryptoConversionMiniProject">
                  View
                </a>
                <br></br>
              </label>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1>Currently</h1>
          <p style={{ fontSize: "x-large" }}>
            I'm learning Redux , some React Concepts , Java algorithms and
            Flutter. I hope to build larger scale projects in the near future!
          </p>
        </div>
        <div style={{ textAlign: "center" }} className="social">
          <h1 id="social">Socials</h1>
          <br></br>
          <br></br>
          <a href="https://www.youtube.com/@Veloxal" className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
            </svg>
          </a>

          <a href="https://twitter.com/VeloxalYT" className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/dulran-samarasinghe-6258b9269/"
            className="card"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
        </div>
      </div>
      <button onClick={scrollToTop} className="button-17">
        Back to the Top?
      </button>
    </>
  );
}

export default App;
