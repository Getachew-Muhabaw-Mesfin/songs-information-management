import ConfirmDelete from "../components/ui/ConfirmDelete";
import Heading from "../components/ui/Heading";
import Row from "../components/ui/Row";

function Settings() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Settings</Heading>
     <ConfirmDelete />
    </Row>
  );
}

export default Settings;
