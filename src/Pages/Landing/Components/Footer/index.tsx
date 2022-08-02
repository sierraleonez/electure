import { Button } from "../../../../Components";
import "./footer.css";

interface Props {
  header: string;
  items: {
    title: string;
    onClick: () => void;
  }[];
}
export default function FooterSection({ header, items }: Props) {
  return (
    <div className="footerSectionContainer">
      <div className="footerSection">
        <p className="footerSectionHeader">{header}</p>
        {items.map((fItem) => (
          <Button type="link" onPress={fItem.onClick}>
            <p className="footerSectionItem">{fItem.title}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}
