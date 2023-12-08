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
          <p>
            Currently , my projects are small scale. I'm a 2nd year majoring in
            Computer Science at <a href="https://www.iit.ac.lk/">IIT</a>
          </p>
          <button>
            <a href="https://google.com/">Browse</a>
          </button>

          <button className="contactme">
            <a href="dulransamarasinghe3@gmail.com">Contact Me</a>
          </button>
          <div className="projects">
            <h1>
              <a href="https://github.com/DulranSam">GitHub</a>
            </h1>
            <div className="card">
              <label>
                <h1>Veloxal</h1>
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
                <h1>Movie Torrent Downloader</h1>
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
                <p>
                  An basic API I made using Express as a mini side project
                  <a href="yts.am">YTS</a>
                </p>
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
                  <a href="yts.am">YTS</a>
                </p>
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
          <div className="card">
            <a href="">YouTube</a>
          </div>
          <div className="card">
            <a href="">Twitter</a>
          </div>
          <div className="card">
            <a href="">Linkedin</a>
          </div>
        </div>
        <h1>PS : Portfolio was Created Using React :)</h1>
      </div>
    </>
  );
}

export default App;
