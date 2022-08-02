import { Rating } from "react-simple-star-rating";
import { Images } from "../../../../Assets";
import "./reviewBox.css";

export default function ReviewBox() {
  return (
    <div className="reviewBoxContainer">
      <p className="reviewHeader">Excellent Teacher</p>
      <Rating
        initialValue={3}
        ratingValue={0}
        readonly
        emptyColor="transparent"
        size={20}
      />
      <p className="reviewContent">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        aliquam praesentium obcaecati odit dolore? Placeat provident sapiente
        minus iure suscipit odit"
      </p>
      <div className="reviewContactContainer">
        <img src={Images.person} className="reviewPersonImage" />
        <div className="reviewContactDetail">
          <p className="authorName">Mike Fisher</p>
          <p className="authorJobs">Owner, Ford</p>
        </div>
      </div>
    </div>
  );
}
