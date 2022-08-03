import Button from "../../../../Components/Button";
import "./featuredContent.css";

interface FeaturedContentProps {
  icon: string;
  header: string;
  title: string;
  description: string;
  tags: Array<{
    icon: string;
  }>;
  duration: string;
  level: string;
  releaseDate: string;
  isFeatured?: boolean;
}

function FeaturedContent({
  icon,
  tags,
  level,
  title,
  header,
  duration,
  releaseDate,
  description,
  isFeatured = false,
}: FeaturedContentProps) {
  return (
    <div
      className="featuredContent"
      style={{ width: isFeatured ? "70%" : "100%" }}
    >
      <img src={icon} className="featuredContentImage" />
      <div className="featuredContentTagContainer">
        <p className="featuredContentHeader">{header}</p>
        <p className="featuredContentTitle">{title}</p>
        <p className="featuredContentDesc">{description}</p>
        <div className="featuredContentTagsContainer">
          {tags.map(({ icon }) => (
            <Button onPress={() => {}} type="link">
              <img src={icon} className="featuredContentTags" />
            </Button>
          ))}
        </div>
        <div className="featuredContentMetadataContainer">
          <p>{duration}</p>
          <p>{level}</p>
          <p>{releaseDate}</p>
        </div>
        {!isFeatured && (
          <Button
            onPress={() => {}}
            type="regular-sm"
            style={{ alignSelf: "flex-start", justifySelf: "flex-end" }}
          >
            <p>VIEW</p>
          </Button>
        )}
      </div>
    </div>
  );
}

export default FeaturedContent;
