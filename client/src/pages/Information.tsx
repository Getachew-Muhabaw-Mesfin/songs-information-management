import CardUI from "../components/CardUI";


function Information() {
  return (
    <div className="container-fluid d-flex ">
      <div className="row">
        <div className="col-md-4">
          <CardUI />
        </div>
        <div className="col-md-4">
          <CardUI />
        </div>
        <div className="col-md-4">
          <CardUI />
        </div>
      </div>
    </div>
  );
}

export default Information;
