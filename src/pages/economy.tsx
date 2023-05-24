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
import React from 'react'
export default function About() {
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  return (
    <div>
      <Container>
        <Row justify="center" align = "center"><Text color = "#85bb65" h1>Economy</Text></Row>
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
                height={200}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C32J8yXs2ZPDaby2X1L-OAHaEt%26pid%3DApi&f=1&ipt=1dcae55955baeadf4f7c0c3d3f10a58108e719266c81d96f75804fc4780e7834&ipo=images"
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
                      ARPA Network, Grographic Map
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.C32J8yXs2ZPDaby2X1L-OAHaEt%26pid%3DApi&f=1&ipt=1dcae55955baeadf4f7c0c3d3f10a58108e719266c81d96f75804fc4780e7834&ipo=images"
                    />
                    <Text id="modal-description">
                      tetst
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
                width={10000}
                height={200}
                src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
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
                      ARPANET GEOGRAPHIC MAP
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
                    />
                    <Text id="d">
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
