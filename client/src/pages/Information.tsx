
import CardUI from "../components/CardUI";
import Limitation from "../components/Limitation";
import techStack from "../utils/techStack"; 

function Information() {
  return (
    <>
      <div className="container-fluid d-flex ">
        <div className="row gx-2">
          <h1>Tech Stack I Used To Develope this Simple Project</h1>
          {techStack.map((item) => (
            <div key={item.id} className="col-md-4">
              <CardUI
                catagory={item.catagory}
                color={item.color}
                imgSrc={item.imgSrc}
                tech={item.tech}
              />
            </div>
          ))}
        </div>
      </div>
      <Limitation />
    </>
  );
}

export default Information;
