import { Icons, Images } from "../../Assets";
import { HeroBanner } from "../../Components";
import NavBar from "../../Components/NavBar";
import "./landing.css";

const mockTagsIcon = [
  'https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png',
  'https://docs.vuejs.id//images/logo.png',
]

const mockMetaData = {
  duration: '1hr 24m',
  level: 'Advanced',
  releaseDate: 'Jun 18, 2020',
}

function Landing(): React.ReactElement {
  return (
    <div>
      <NavBar />
      <HeroBanner imageUrl={Images.landing}>
        <p>Hellooo</p>
      </HeroBanner>
      <div className="container">
      <div className="featuredContent">
        <div className="featuredContentImageContainer">
          <img src={Icons.reactIcon} className="featuredContentImage"/>
        </div>
        <div className="featuredContentTagContainer">
          <p>Tutorial</p>
          <p>Course Title</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi sit dolor quos minus, quia dolorum eius ullam, deserunt adipisci tempora velit? Esse enim, accusamus dicta blanditiis laudantium consequuntur aliquid.</p>
          <div className="featuredContentTagsContainer">
            {
              mockTagsIcon.map(icon => (
                <img src={icon} className="featuredContentTags"/>
              ))
            }
          </div>
          <div className="featuredContentMetadataContainer">
            <p>{mockMetaData.duration}</p>
            <p>{mockMetaData.level}</p>
            <p>{mockMetaData.releaseDate}</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

function SideContent() {
  return (
    <div>
      <div>
        <img/>
      </div>
      <div>
        <p>Course Type</p>
        <p>Course Title</p>
      </div>
    </div>
  )
}
export default Landing;
