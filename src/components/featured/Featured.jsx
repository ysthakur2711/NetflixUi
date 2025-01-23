import { InfoOutlined, PlayArrow, Pause } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import { Link } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const [play, setPlay] = useState(false);
  const [info, setInfo] = useState(false);

  function handlePlay() {
    setPlay(p => !p)
  }
  function handleInfo() {
    setInfo(p => !p)
  }

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  //console.log(content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {!play && (<img className="mainImg" src={content.img} alt="" />)}
      {play && (<iframe
        width="100%"
        height="100%"
        src={`./HollyWoodMovies/${content._id}.mp4`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>)}
      <div className="info">

        {content.imgTitle === "" ? (
          <h1 class="imgTitle" data-automation-id="title"
            elementtiming="dv-web-timing-atfVisible">{content.title}</h1>
        ) : (
          <img style={{ marginBottom: "1rem" }} src={content.imgTitle} alt="" />
        )}

        {info && (
          <div className="details" >
            <span className="desc">{content.desc}</span>
            <Link className="Genre" href="#">{content.genre}</Link>
            <span className="year">{content.year}</span>
          </div>
        )}
        <div className="buttons">
          <button className="play" onClick={handlePlay}>
            {!play ? <PlayArrow /> : <Pause />}
            <span>{!play ? "Play" : "Pause"}</span>
          </button>
          <button className="more" onClick={handleInfo}>
            <InfoOutlined />
            <span>{!info ? "Show Info" : "Hide Info"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
