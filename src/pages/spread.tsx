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
  return (
    <div>
      <Container>
        <Row justify="center" align = "center"><Text color = "#75ff4e" h1>Spread of Information</Text></Row>
        <Text>
          "The internet is (almost) everywhere. We rely on it when we want to
          buy a new phone or a computer and use it when we need help with
          studying. It’s a great place to play games, share music, or maybe even
          meet the love of your life. But it wasn’t always like this. You’ll
          often hear that the internet began in the ‘90s, but its actual
          beginnings date back way earlier. To be precise, it was envisioned by
          a scientist who wanted to improve communication between computers and
          humans and how they exchange data."
        </Text>
        <Row justify="center" align="center">
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>ARPA Network, Grographic Map(1973)</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Image
                width={200}
                height={100}
                src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
              />
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      ARPA Network Grographic Map
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
                    />
                    <Text id="modal-description">
                      This shows how Arpanet influenced the marketplace as it
                      served as an entryway into the booming business of
                      ecommerce.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer y={1} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>ARPANET GEOGRAPHIC MAP(1980)</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Image
                width={200}
                height={100}
                src="https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
              />
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      ARPANET GEOGRAPHIC MAP
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
                    />
                    <Text id="modal-description">
                      This shows how Arpanet influenced the marketplace as it
                      served as an entryway into the booming business of
                      ecommerce.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
        </Row>
        <Spacer y={0.5} />
      </Container>
    </div>
  );
}
