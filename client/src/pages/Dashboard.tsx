import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import Form from "../components/Form";
import SongTable from "../components/SongTable";

function Dashboard() {
  return (
    <Row type="vertical">
      <Heading>
        <p>
          List of Songs <button >Add</button>
        </p>
        <SongTable />
        <Form />
      </Heading>
    </Row>
  );
}

export default Dashboard;
