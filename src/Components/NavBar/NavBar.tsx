import { Button } from "..";
import { Images } from "../../Assets";
import './navbar.css'

interface NavBarItem {
  content: string;
  onPress: () => void;
  id: string;
}
const NavbarContent: NavBarItem[] = [
  {
    content: "Home",
    id: "1",
    onPress: () => {},
  },
  {
    content: "Testimonials",
    id: "2",
    onPress: () => {},
  },
  {
    content: "Blog",
    id: "3",
    onPress: () => {},
  },
  {
    content: "About",
    id: "4",
    onPress: () => {},
  },
  {
    content: "Contact",
    id: "5",
    onPress: () => {},
  },
];


export default function NavBar(): React.ReactElement {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <Button onPress={() => {}} type="link">
          <img src={Images.electureIcon} className='logoIcon'/>
        </Button>
      </div>
      <div>
        {NavbarContent.map((item) => (
          <Button
            onPress={item.onPress}
            type={"link"}
            style={{ marginRight: "16px", color: 'white' }}
          >
            <div className="buttonContentContainer">
              <p className="buttonContent">{item.content}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
