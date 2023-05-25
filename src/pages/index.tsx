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

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollDown() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 960, behavior: "smooth" });
}

export default function About() {
  return (
    <div>
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
        <Grid>
          <Card css={{ mw: "400px" }}>
            <Card.Body>
              <Text>
                {
                  "Benjamin Telanoff once said that The Advanced Research Projects Agency Network (ARPANET), the forerunner of the Internet, was a pioneering long-haul network funded by the U.S. Department of Defense’s Advanced Research Projects Agency (ARPA). It served as the test bed for many areas of internetworking technology development and testing, and acted as the central backbone during the development of the Internet. The ARPANET was built using packet-switching computers interconnected by leased lines."
                }
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid>
          <Card css={{ mw: "400px" }}>
            <Card.Body>
              <Text>
                {
                  "Benjamin Ostrovsky aslo once thought that The Advanced Research Projects Agency Network (ARPANET), the forerunner of the Internet, was a pioneering long-haul network funded by the U.S. Department of Defense’s Advanced Research Projects Agency (ARPA). It served as the test bed for many areas of internetworking technology development and testing, and acted as the central backbone during the development of the Internet. The ARPANET was built using packet-switching computers interconnected by leased lines."
                }
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      <Spacer y={50} />
    </div>
  );
}
