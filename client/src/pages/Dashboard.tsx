import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";
import Form from "../components/Form";
import SongTable from "../components/SongTable";

function Dashboard() {
  return (
    <Row type="vertical">
      <Heading>
        <Form />
        <p>List of Songs</p>
        <SongTable />
      </Heading>
    </Row>
  );
}

export default Dashboard;
