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
              <Text b>Evolution of Ecommerce Industry</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Image
                width={200}
                height={200}
                src = "https://www.agileinfoways.com/wp-content/uploads/2018/02/The-Evolution-of-E-Commerce-Industry-in-the-Last-few-Years.jpg"
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
                    (THE EVOLUTION OF E-COMMERCE INDUSTRY IN THE LAST FEW YEARS(2018))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src = "https://www.agileinfoways.com/wp-content/uploads/2018/02/The-Evolution-of-E-Commerce-Industry-in-the-Last-few-Years.jpg"
                      />
                    <Text id="modal-description">
                      This image exemplifies the enduring impact that ARPANET had on the economy. Because of ARPANET's pivotal role in the creation of the internet, e-commerce has been able to expand and reach new markets, revolutionize consumer behavior, and drive significant economic transactions through online platforms, turning the traditional economy into a digital marketplace.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer y={1} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>INTERNET ECONOMY GDP</Text>
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
                      (INTERNET ECONOMY AS A PERCENTAGE OF 2016 GDP(OECD)(2016))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={400}
                      height={300}
                      src="http://img.koreatimes.co.kr/upload/news/120325_a02_statwatch.jpg"
                    />
                    <Text id="d">
                      This image signifies how the development and widespread adoption of the internet, stemming from ARPANET's innovation, have transformed various sectors, fostering economic growth, innovation, and new business opportunities, contributing to the overall GDP of countries worldwide.
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
