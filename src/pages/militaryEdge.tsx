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
import React from "react";

export default function About() {
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  return (
    <div>
      <Container>
        <Row justify="center" align="center">
          <Text color="#4B5320" h1>
            Military Edge
          </Text>
        </Row>
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
              <Text b>Military Use of Internet</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Image
                width={200}
                height={200}
                src = "https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
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
                    (The Army is using fake social media feeds to help train soldiers in the most realistic environments imaginable. (Julius Chatters/Army))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src = "https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
                    />
                    <Text id="modal-description">This shows how ARPANET had a long term impact in the army since it forged the beginnings of the internet that is now being used constantly by the military.</Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer y={1} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>ARPANET/MILNET MAP</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Image
                width={10000}
                height={200}
                src="http://scihi.org/wp-content/uploads/2018/01/ARPANET_-_MILNT_Diagram_1984-768x427.jpg"
              />
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible2(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="n"
                  aria-describedby="d"
                  {...bindings2}
                >
                  <Modal.Header>
                    <Text id="n" size={18}>
                      (ARPANET/MILNET GEOGRAPHIC MAP(1984))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="http://scihi.org/wp-content/uploads/2018/01/ARPANET_-_MILNT_Diagram_1984-768x427.jpg"
                    />
                    <Text id="d">
                     This illustrates the widespread presence and connectivity of ARPANET within the military infrastructure. It showcases the curcial role ARPANET had in gaining an advantage through its creation of efficient communication, sharing of resources, and coordination between military institutions and research centers.
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
