import Heading from "../components/ui/Heading";
// import Row from "../components/ui/Row";
import SongsTable from "../components/SongsTable";
import Form from "../components/Form";

function Dashboard() {
  return (
    <Heading>
      <SongsTable />
      <Form />
    </Heading>
  );
}

export default Dashboard;
