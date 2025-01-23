import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  //console.log(location);
  const movie = location.state?.movie;
  if (!movie || !movie.video) {
    return <div>Movie data not available. Please go back to the home page.</div>;
  }
  //console.log(movie)

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe 
      width="100%" 
      height="100%" 
      src={`./HollyWoodMovies/${movie._id}.mp4`} 
      title="YouTube video player"
      frameborder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; 
      web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
    </div>
  );
}
