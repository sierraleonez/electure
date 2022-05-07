import { Icons, Images } from "../../Assets";
import { Button, FeaturedContent, HeroBanner } from "../../Components";
import NavBar from "../../Components/NavBar";
import { Rating } from 'react-simple-star-rating'
import "./landing.css";

const mockTagsIcon = [
  { icon: "https://cubettech.com/wp-content/uploads/2018/09/1280px-React-icon.svg_.png", },
  { icon: "https://docs.vuejs.id//images/logo.png", },
];

const mockSideContent = [
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80',
    courseType: 'TUTORIAL',
    courseTitle: 'Learning React Native',
  },
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80',
    courseType: 'TUTORIAL',
    courseTitle: 'Learning React Native',
  },
  {
    url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80',
    courseType: 'TUTORIAL',
    courseTitle: 'Learning React Native',
  },
]

const mockMetaData = {
  duration: "1hr 24m",
  level: "Advanced",
  releaseDate: "Jun 18, 2020",
};

const mockTutorialCourses = [
  {
    icon: Icons.reactIcon,
    title: 'React',
  },
  {
    icon: Icons.reactIcon,
    title: 'React',
  },
  {
    icon: Icons.reactIcon,
    title: 'React',
  },
  {
    icon: Icons.reactIcon,
    title: 'React',
  },
  {
    icon: Icons.reactIcon,
    title: 'React',
  },
]

const mockMainCourse = [
  {
    description: "aaaa",
    duration: '1h 24m',
    header: 'TUTORIAL',
    icon: Icons.reactIcon,
    level: 'Advanced',
    releasedate: 'Jun 18, 2020',
    tags: mockTagsIcon,
    title: 'Learning React Native'
  },
  {
    description: "aaaa",
    duration: '1h 24m',
    header: 'TUTORIAL',
    icon: Icons.reactIcon,
    level: 'Advanced',
    releasedate: 'Jun 18, 2020',
    tags: mockTagsIcon,
    title: 'Learning React Native'
  },
]
function Landing(): React.ReactElement {
  return (
    <div>
      <NavBar />
      <HeroBanner imageUrl={Images.landing}>
        <p>Hellooo</p>
      </HeroBanner>
      <div className="container">
        <FeaturedContent
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, exercitationem corrupti consectetur expedita veniam ad laboriosam itaque quo eaque ullam veritatis ex? Rerum, praesentium porro. Nesciunt voluptatum temporibus quidem consequuntur expedita modi, fugiat ratione deserunt omnis?"
          duration="1h 24m"
          header="TUTORIAL"
          icon={Icons.reactIcon}
          level="Advanced"
          releaseDate="Jun 18, 2020"
          tags={mockTagsIcon}
          title="Learning React Native"
        />
        <div className="sideContentContainer">
          {
            mockSideContent.map(sc => (
              <SideContent data={sc}/>
            ))
          }
        </div>
      </div>
      <div className="mainContainer">
        <p>TUTORIAL COURSES</p>
        <p>Choose Course</p>
        <div className="courseBoxContainer">
          {mockTutorialCourses.map(tCourse => (
            <CourseBox data={tCourse}/>
          ))}
        </div>

        <div className="contentContainer">
          <div className="searchBox">
            <input/>
            <Button onPress={() => {}} type="regular">
              <p>test</p>
            </Button>
          </div>
          <div className="mainCourseContainer">
            <p>Latest <br/> <span>Tutorial</span></p>
            <div className="courseListContainer">
              <div className="courseList">
                {mockMainCourse.map(course => (
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
              <div className="sideCourse">
                <div>
                  <img src={Icons.reactIcon} className="sideCourseImg" />
                  <p>Learning React Native</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewsContainer">
            <p>TESTIMONIALS</p>
            <p>Student Reviews</p>
            <div>
              <div>
                <p>Excellent Teacher</p>
                <Rating
                  initialValue={3}
                  ratingValue={0}
                  readonly
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam praesentium obcaecati odit dolore? Placeat provident sapiente minus iure suscipit odit, veritatis quod pariatur, dolore vel culpa possimus, quia debitis?</p>
                <div className="reviewContactContainer">
                  <img src={Images.person} className="reviewPersonImage"/>
                  <div>
                    <p>Mike Fisher</p>
                    <p>Owner, Ford</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerContent">
          <p>About Us</p>
          <p className="footerAboutUsDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ipsum minima culpa doloribus placeat accusantium. Illum aperiam officiis ut quod.</p>
          <div className="footerSocialMedia">

          </div>
        </div>
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
          <div className="footerSection">
            <p className="footerSectionHeader">Quick Links</p>
            <p className="footerSectionItem">About us</p>
            <p className="footerSectionItem">Testimonials</p>
            <p className="footerSectionItem">Terms of Service</p>
            <p className="footerSectionItem">Privacy</p>
            <p className="footerSectionItem">Contact Us</p>
          </div>
          <div className="footerSection">
            <p className="footerSectionHeader">Quick Links</p>
            <p className="footerSectionItem">About us</p>
            <p className="footerSectionItem">Testimonials</p>
            <p className="footerSectionItem">Terms of Service</p>
            <p className="footerSectionItem">Privacy</p>
            <p className="footerSectionItem">Contact Us</p>
          </div>
          <div className="footerSection">
            <p className="footerSectionHeader">Quick Links</p>
            <p className="footerSectionItem">About us</p>
            <p className="footerSectionItem">Testimonials</p>
            <p className="footerSectionItem">Terms of Service</p>
            <p className="footerSectionItem">Privacy</p>
            <p className="footerSectionItem">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SideContentProps {
  data: {
    url: string
    courseType: string
    courseTitle: string
  }
}

function SideContent({ data: {
  courseTitle,
  courseType,
  url
}}: SideContentProps) {
  return (
    <div className="sideContent">
      <div>
        <img src={url} className="sideContentImage"/>
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
    icon: string
    title: string
  }
}

function CourseBox({ data: { icon, title } }: CourseBoxProps) {
  return (
    <div className="courseBox">
      <Button onPress={() => {}} type='link' >
        <>
          <img src={icon} className="courseBoxIcon"/>
          <p className="courseBoxTitle">{title}</p>
        </>
      </Button>
    </div>
  )
}
export default Landing;
