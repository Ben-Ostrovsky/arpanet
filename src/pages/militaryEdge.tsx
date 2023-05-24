import {
  Card,
  Container,
  Text,
  Row,
  Col,
  Modal,
  useModal,
  Button,
  Image,
  Spacer,
} from "@nextui-org/react";
export default function About() {
  const { setVisible, bindings } = useModal();
  return <div>
    <Container>
      <Row justify="center" align = "center"><Text color = "#4b5320" h1>Military Edge</Text></Row>
      <Row justify="center" align = "center"><Text>THIS gave the U.S. Military an edge doing a crucial time - the Cold War - which aided in U.S advancement and victory in the field and in the workspace.</Text></Row>
    </Container>
  </div>;
}
