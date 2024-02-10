import Heading from "../components/ui/Heading";
// import Row from "../components/ui/Row";
// import SongsTable from "../components/SongsTable";
import Form from "../components/Form";
// import Information from "../components/Information";
import SongTable from "../components/SongTable";

function Dashboard() {
  return (
    <Heading>
      <p>List of Songs</p>
      <SongTable />
      <Form />
    </Heading>
  );
}

export default Dashboard;
