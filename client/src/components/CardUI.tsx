import { FaCaretRight } from "react-icons/fa";
interface CardUIProps {
  catagory: string;
  imgSrc: string;
  color: string;
  tech: string[];
}
const CardUI:React.FC<CardUIProps>=({ catagory, imgSrc, color, tech })=> {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          src={imgSrc}
          alt={catagory}
          className="card-img-top"
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title text-bold h4" style={{ color: `${color}` }}>
          {catagory}
        </h4>
        <ul className="list-group list-group-flush text-start">
          {tech.map((item, index) => (
            <li key={index} className="list-group-item">
              <FaCaretRight size={25} style={{ color: "#07B151" }} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardUI;
