import MainNavbar from "@/components/MainNavbar";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Head from "next/head";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollDown() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 800, behavior: "smooth" });
}

export default function About() {
  return (
    <div>
      <Head>
        <title>Home | Arpanet</title>
      </Head>
      <Grid.Container
        justify="center"
        css={{
          height: "91vh",
          backgroundImage:
            "url(https://cdnb.artstation.com/p/assets/images/images/045/436/379/large/pelinsuarici-2.jpg?1642704559)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <Container
          fluid
          css={{ backdropFilter: "blur(10px) brightness(90%)" }}
          justify="center"
        >
          <Grid>
            <Col css={{ width: "100%", textAlign: "center" }}>
              <Spacer y={6} />
              <Text color={"white"} h1 weight={"bold"} size={70}>
                {"Advanced Research"}
              </Text>
              <Text color={"white"} h1 weight={"bold"} size={70}>
                {"Projects Agency Network"}
              </Text>
              <Text color={"white"} h1 weight={"black"} size={70}>
                {"(ARPANET)"}
              </Text>
              <Spacer y={6} />
            </Col>
          </Grid>
          <Row justify="center">
            <Button
              borderWeight={"bold"}
              auto
              ghost
              rounded
              size={"xl"}
              color="success"
              onClick={scrollDown}
            >
              {"▼"}
            </Button>
          </Row>
        </Container>
      </Grid.Container>
      <Spacer y={3} />

      <Grid.Container gap={2} justify="center">
        As the precursor of the internet, ARPANET is a frontier in America's
        history by establishing the foundations for ecommerce, facilitating the
        spread of information, and advancing US military technological
        capabilities.
        <Grid>
          <Card css={{ height: "530px", mw: "400px" }}>
            <Card.Body>
              <Text>
                {
                  "ARPANET is the Advanced Reserach Projects Agency Network that was a forerunner of the internet as an experimental network. It was created as a 'part of a response to the perceived threat of the Soviet’s launch of Sputnik'(Weber State University) as a form of technological advancement. Because of this it had the original purpose of linking institutions the Pentagon had funded as a means of research. Allthough this was it's intended purpose, throughout its creation the inventors had decided that not only would it's service be for the military, but for the people as well as a way to facilitate information quickly across the country and to provide a basis for online institutions like e-commerce. After its first use, interest in the matter was generated towards the two-node network. This resulted in the fact that 'By the end of 1969, academic institutions were scrambling to connect to ARPANET'(Britannica) which furthered along the creation of the internet."
                }
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Spacer x={2} />
        <Grid>
          <Card css={{ height: "530px", mw: "400px" }}>
            <Card.Body>
              <Text>
                {
                  "ARPANET was like a big network that connected computers together. It used packet switching, which basically divided data into smaller packets tagged with its necessary information and transmitted independently across the network. This was helpful as by being able to take different routes, it ensured reliabliity and increased efficiency. ARPANET used Interface Message Processors (IMPs) as nodes. These facilitated the routing of packets between the computers. This caused them to be the backbones as they allowed the interconnection between various host computers. "
                }
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
      <Row justify = "center" align = "center"> Primary Sources : https://docs.google.com/document/d/1uC0oTqMqmowNDD8CXXqVdmrVxtXc5vVv3P2cf5tuGO0</Row>
      <Row justify = "center" align = "center">Secondary Sources : https://docs.google.com/document/d/150S7rCMJ27EVm0C-t2G4bmEdCRFt72sWvAQ2fiat06k</Row>
      
    </div>
  );
}
