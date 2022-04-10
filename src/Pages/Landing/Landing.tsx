import { Images } from "../../Assets";
import { HeroBanner } from "../../Components";
import NavBar from "../../Components/NavBar";
import "./landing.css";

function Landing(): React.ReactElement {
  return (
    <div>
      <NavBar />
      <HeroBanner imageUrl={Images.landing}>
        <p>Hellooo</p>
      </HeroBanner>
      <div className="container">testt</div>
    </div>
  );
}

export default Landing;
