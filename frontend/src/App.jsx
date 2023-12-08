import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function ApiCall() {
      try {
        setLoading(true);
        const r = await Axios.get("https://yts.mx/api/v2/list_movies.json");

        setData(r.data.data.movies.map((x) => x.image));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    ApiCall();
  }, []);

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
        <div className="upper">
          <h1 style={{ margin: "5%" }}>Dulran Samarasinghe</h1>
          <label>
            <p style={{ fontSize: "x-large" }}>
              18 Year Old Junior FullStack Web Developer/Enthusiast from
              Colombo, Sri Lanka
            </p>
            <img
              src={data[0]}
              style={{ float: "right", margin: "5%" }}
              alt="Movie Poster"
            ></img>
          </label>
        </div>
        <div className="middle">
          <h1>Projects</h1>
          <p style={{ fontSize: "x-large" }}>
            I'm a 2nd year majoring in Computer Science at{" "}
            <a href="https://www.iit.ac.lk/">IIT</a>. Currently my projects are
            small scale ones , however with improvement I do wish to move onto
            larger projects.
          </p>

          <button className="button-17">
            <a href="mailto:dulransamarasinghe3@gmail.com">Contact Me</a>
          </button>
          <div className="projects">
            <h1>
              <a
                href="https://github.com/DulranSam"
                style={{ textAlign: "center" }}
              >
                Find Me On GitHub
              </a>
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
                <img alt="image of UI"></img>
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
                <img alt="image of UI"></img>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Movie Trailers</h1>
                <a href="https://github.com/DulranSam/MovieTorrentDownload">
                  View
                </a>
                <p>
                  Project created using the MERN stack , to make CRUD operations
                  from the frontend to handle appropriately
                  <a href="yts.am">YTS</a>
                </p>
                <img alt="image of UI"></img>
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
                <img alt="image of UI"></img>
              </label>
            </div>
            <div className="card">
              <label>
                <h1>Friends API</h1>
                <a href="https://github.com/DulranSam/VeloxalOnlineStoreMobileApp">
                  View
                </a>
                <p>An basic API I made using Express as a mini side project</p>

                <img alt="image of UI"></img>
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
                <a href="https://github.com/DulranSam/VeloxalOnlineStoreMobileApp">
                  View
                </a>
                <br></br>
                <img alt="image of UI"></img>
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
                <img alt="image of UI"></img>
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
          <h1>Socials</h1>
          <br></br>
          <br></br>
          <a href="https://www.youtube.com/@Veloxal" className="card">
            YouTube
          </a>

          <a href="https://twitter.com/VeloxalYT" className="card">
            Twitter
          </a>

          <a
            href="https://www.linkedin.com/in/dulran-samarasinghe-6258b9269/"
            className="card"
          >
            Linkedin
          </a>
        </div>
        <h1>PS : Portfolio was Created Using React :)</h1>
      </div>
    </>
  );
}

export default App;
