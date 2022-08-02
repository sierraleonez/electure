import { Icons, Images } from "../../Assets";
import { Button } from "../../Components";
import NavBar from "./Components/NavBar";
import HeroBanner from "./Components/HeroBanner";
import "./landing.css";
import FeaturedContent from "./Components/FeaturedContent";
import ReviewBox from "./Components/ReviewBox";

const mockTagsIcon = [
  {
    icon: "https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png",
  },
  { icon: "https://docs.vuejs.id//images/logo.png" },
];

const mockSideContent = [
  {
    url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
    courseType: "TUTORIAL",
    courseTitle: "Learning React Native",
  },
  {
    url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
    courseType: "TUTORIAL",
    courseTitle: "Learning React Native",
  },
  {
    url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
    courseType: "TUTORIAL",
    courseTitle: "Learning React Native",
  },
];

const mockMetaData = {
  duration: "1hr 24m",
  level: "Advanced",
  releaseDate: "Jun 18, 2020",
};

const mockTutorialCourses = [
  {
    icon: Icons.reactIcon,
    title: "React",
  },
  {
    icon: Icons.reactIcon,
    title: "React",
  },
  {
    icon: Icons.reactIcon,
    title: "React",
  },
  {
    icon: Icons.reactIcon,
    title: "React",
  },
  {
    icon: Icons.reactIcon,
    title: "React",
  },
];

const mockMainCourse = [
  {
    description: "aaaa",
    duration: "1h 24m",
    header: "TUTORIAL",
    icon: Icons.reactIcon,
    level: "Advanced",
    releasedate: "Jun 18, 2020",
    tags: mockTagsIcon,
    title: "Learning React Native",
  },
  {
    description: "aaaa",
    duration: "1h 24m",
    header: "TUTORIAL",
    icon: Icons.reactIcon,
    level: "Advanced",
    releasedate: "Jun 18, 2020",
    tags: mockTagsIcon,
    title: "Learning React Native",
  },
];
function Landing(): React.ReactElement {
  return (
    <div
      style={{
        maxWidth: "100%",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      <NavBar />
      <HeroBanner imageUrl={Images.landing}>
        <p>Hellooo</p>
      </HeroBanner>
      <div className="featuredContentContainer">
        <FeaturedContent
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, exercitationem corrupti consectetur expedita veniam ad laboriosam itaque quo eaque ullam veritatis ex? Rerum, praesentium porro. Nesciunt voluptatum temporibus quidem consequuntur expedita modi, fugiat ratione deserunt omnis?"
          duration="1h 24m"
          isFeatured
          header="TUTORIAL"
          icon={Icons.reactIcon}
          level="Advanced"
          releaseDate="Jun 18, 2020"
          tags={mockTagsIcon}
          title="Learning React Native"
        />
        <div className="sideContentContainer">
          {mockSideContent.map((sc) => (
            <SideContent data={sc} />
          ))}
        </div>
      </div>
      <div className="mainContainer">
        <p className="preheader">TUTORIAL COURSES</p>
        <p className="header">Choose Course</p>
        <div className="courseBoxContainer">
          {mockTutorialCourses.map((tCourse) => (
            <CourseBox data={tCourse} />
          ))}
        </div>

        <div className="contentContainer">
          <div className="searchBox">
            <input />
            <Button onPress={() => {}} type="regular">
              <p>test</p>
            </Button>
          </div>

          <div className="mainCourseContainer">
            <p className="preheader">
              Latest <br /> <span className="header">Tutorial</span>
            </p>
            <div className="courseListContainer">
              <div className="courseList">
                {mockMainCourse.map((course) => (
                  <FeaturedContent
                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, exercitationem corrupti consectetur expedita veniam ad laboriosam itaque quo eaque ullam veritatis ex? Rerum, praesentium porro. Nesciunt voluptatum temporibus quidem consequuntur expedita modi, fugiat ratione deserunt omnis?"
                    duration=""
                    header=""
                    icon={Icons.reactIcon}
                    level=""
                    releaseDate=""
                    tags={mockTagsIcon}
                    title=""
                  />
                ))}
                <Button onPress={() => {}} type="link">
                  <p>Loadmore Courses!</p>
                </Button>
              </div>
              <div className="sideCourseContainer">
                <div className="sideCourseItem">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
                    }
                    className="sideCourseImg"
                  />
                  <p>Learning React Native</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewsContainer">
            <p className="preheader">TESTIMONIALS</p>
            <p className="header">Student Reviews</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
              <ReviewBox />
              <ReviewBox />
              <ReviewBox />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerContent">
          <p>About Us</p>
          <p className="footerAboutUsDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            ipsum minima culpa doloribus placeat accusantium. Illum aperiam
            officiis ut quod.
          </p>
          <div className="footerSocialMedia"></div>
        </div>
        <FooterSection />
        <FooterSection />
        <FooterSection />
      </div>
    </div>
  );
}

interface SideContentProps {
  data: {
    url: string;
    courseType: string;
    courseTitle: string;
  };
}

function SideContent({
  data: { courseTitle, courseType, url },
}: SideContentProps) {
  return (
    <div className="sideContent">
      <div>
        <img src={url} className="sideContentImage" />
      </div>
      <div>
        <p className="featuredContentHeader">{courseType}</p>
        <p className="">{courseTitle}</p>
      </div>
    </div>
  );
}

interface CourseBoxProps {
  data: {
    icon: string;
    title: string;
  };
}

function CourseBox({ data: { icon, title } }: CourseBoxProps) {
  return (
    <div className="courseBox">
      <Button onPress={() => {}} type="link">
        <>
          <img src={icon} className="courseBoxIcon" />
          <p className="courseBoxTitle">{title}</p>
        </>
      </Button>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="footerSectionContainer">
      <div className="footerSection">
        <p className="footerSectionHeader">Quick Links</p>
        <Button type="link" onPress={() => {}}>
          <p className="footerSectionItem">About us</p>
        </Button>
        <Button type="link" onPress={() => {}}>
          <p className="footerSectionItem">Testimonials</p>
        </Button>
        <Button type="link" onPress={() => {}}>
          <p className="footerSectionItem">Terms of Service</p>
        </Button>
        <Button type="link" onPress={() => {}}>
          <p className="footerSectionItem">Privacy</p>
        </Button>
        <Button type="link" onPress={() => {}}>
          <p className="footerSectionItem">Contact us</p>
        </Button>
      </div>
    </div>
  );
}
export default Landing;
