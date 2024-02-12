// import ConfirmDelete from "../components/ui/ConfirmDelete";
// import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";


function CardUI() {
  return (
    <Row type="horizontal">
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src="https://source.unsplash.com/200x200/?music"
            alt="music"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title text-bold">Fronted Technology</h4>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </Row>
  );
}

export default CardUI;
