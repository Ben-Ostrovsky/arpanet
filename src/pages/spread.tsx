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
  const CardItemImage = ({
    header,
    imgURL,
    setVis,
  }: {
    header: string;
    imgURL: string;
    setVis: any;
  }) => {
    return (
      <Card css={{ mw: "330px", h: "auto" }} variant="bordered">
        <Card.Header>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Image width={200} height={200} src={imgURL} />
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center" align="center">
            <Button size="sm" light onPress={() => setVis(true)}>
              Expand
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };
  const CardItemText = ({
    header,
    text,
    setVis,
  }: {
    header: string;
    text: string;
    setVis: any;
  }) => {
    return (
      <Card css={{ h: "auto" }} variant="bordered">
        <Card.Header>
          <Text b>{header}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>{text}</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center" align="center">
            <Button size="sm" light onPress={() => setVis(true)}>
              Expand
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  const { setVisible: setVisible3, bindings: bindings3 } = useModal();

  return (
    <div>
      <Container>
        <Row justify="center" align="center">
          <Text h1>Spread of Information</Text>
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
          <CardItemImage
            header={"Geographic Map"}
            imgURL={
              "http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
            }
            setVis={setVisible}
          />

          <Spacer x={4} />

          <CardItemImage
            header={"GEOGRAPHIC MAP"}
            imgURL={
              "https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
            }
            setVis={setVisible2}
          />
        </Row>
      </Container>

      {/* MODAL SETUP BELOW */}
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            (ARPA Network, Grographic Map(1973))
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7032016/ARPANET.jpg?1477749691"
          />
          <Text id="modal-description">
            This image visually depicts the expansive network of interconnected
            ARPANET nodes, which facilitated the spread of information. This map
            showcases how it cretaed a efficient communication infrastructure
            which led to the rapid exchange of data and knowledge among diverse
            institutions and contributing to the acceleration of information
            dissemination.
          </Text>
        </Modal.Body>
      </Modal>
      <Modal
        scroll
        width="600px"
        aria-labelledby="n"
        aria-describedby="d"
        {...bindings2}
      >
        <Modal.Header>
          <Text id="n" size={18}>
            (ARPANET GEOGRAPHIC MAP(1980))
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://thisdayintechhistory.com/wp-content/uploads/2012/11/arpanet80.gif"
          />
          <Text id="d">
            This, combined with the prior image, shows how ARPANET continues to
            expand the reach of the internet which shows how it increased the
            intertwined nodes/institutions that used it to connect and share
            information.
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}
