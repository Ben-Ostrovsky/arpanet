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
  Grid,
  Collapse,
} from "@nextui-org/react";
import Head from "next/head";
import React from "react";

export default function About() {
  const { setVisible, bindings } = useModal();
  const { setVisible: setVisible2, bindings: bindings2 } = useModal();
  const { setVisible: setVisible3, bindings: bindings3 } = useModal();
  const { setVisible: setVisible4, bindings: bindings4 } = useModal();
  const { setVisible: setVisible5, bindings: bindings5 } = useModal();
  const { setVisible: setVisible6, bindings: bindings6 } = useModal();
  return (
    <div>
      <Head>
        <title> Military | Arpanet </title>
      </Head>
      <Container>
        <Row justify="center" align="center">
          <Text h1>The Military</Text>
        </Row>
        <Spacer />
        <Collapse.Group>
          <Collapse title="Innitial Ties to the Military">
            <Text>
              After loosing in the race to space and amidst the largest
              strategical battle of the decade, the US was desperate for
              innovation. Eisenhower's ARPA (Advanced Research Projects Agency),
              which was formed shortly after Sputnik with the intention of
              developing technologies for use by the military, completely
              transformed the military, it's effects starting with it's '67
              ARPANET proposal and still ongoing today.
            </Text>
          </Collapse>
          <Collapse title="Effect" expanded>
            <Text>
              The military was significantly impacted by ARPANET, which
              transformed information sharing and transformed military
              operations. It pioneered a robust and decentralized network that
              improved the military's capacity for the swift and secure sharing
              of vital information. ARPANET allowed a method to command/control
              operations so as to have them be more efficient, and allow
              real-time coordination and decision-making across separate
              units.The secure military networks and protocols that were
              developed as a result of this network are still in use today
              ARPANET served as the basis for the building of sophisticated
              military communication systems.ARPANET also sped up the
              development of technologies that are now crucial to contemporary
              military operations, like data transmission, cybersecurity, and
              encryption. Overall, ARPANET significantly changed military
              communication, strengthened military capabilities, and eventually
              shaped the way military is conducted in a new digital age.
            </Text>
          </Collapse>
        </Collapse.Group>
        <Spacer y={2} />

        <Grid.Container gap={2} justify="center">
          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    ARPANET
                  </Text>
                  <Text h4 size={30} color="white">
                    Purpose for Creation
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                css={{ filter: "brightness(90%)" }}
                src="https://epsilon.aeon.co/images/f8ba0a79-8a5e-4d3c-ada0-aa928fc72422/header_essay-sage-104624883_master.jpg"
                objectFit="cover"
                width="100%"
                height={380}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible5(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    {"arpanet inspired"}
                  </Text>
                  <Text h4 size={30} color="white">
                    Military Use of Internet
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                css={{ filter: "brightness(60%)" }}
                src="https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
                objectFit="none"
                width="100%"
                height={380}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="rgba(0, 0, 0, 0.7)"
                  >
                    MILNET/ARPANET
                  </Text>
                  <Text h4 size={30} color="black">
                    Widespread Usage
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ARPANET_-_MILNT_Diagram_1984.jpg/1200px-ARPANET_-_MILNT_Diagram_1984.jpg?20170823102338"
                objectFit="none"
                width="100%"
                height={380}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible2(true)}>
                    <Text color="rgba(0, 0, 0, 0.8)" h6>
                      Expand
                    </Text>
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    ARPANET
                  </Text>
                  <Text h4 size={30} color="white">
                    Management Study
                  </Text>
                  <Text size={12} weight="bold" color="white">
                    "[Arpanet created because of] The need to develop
                    alternatives for military communication systems having lower
                    cost, lower delay and higher bandwidth capabilities than
                    those currently in use, while still providing the end-to-end
                    security and reliability needed"
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://pbs.twimg.com/media/ElfloJfW0AMwgiD.jpg"
                objectFit="cover"
                width="100%"
                height={380}
                css={{ filter: "brightness(70%)" }}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible3(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    The Arpanet And It's Impact on the
                  </Text>
                  <Text size={30} color="white">
                    State of Networking
                  </Text>
                  <Text size={12} weight="bold" color="white">
                    “We had a meeting with our subcontractor for hardware to
                    present our complaint to them that nodes were down a half
                    hour a day. Their reaction was, “You’re down a half hour out
                    of 24. That’s about 2%. You’re getting 98% uptime..."
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://brewminate.com/wp-content/uploads/2019/03/031219-76-History-Internet-Technology.jpg"
                objectFit="fill"
                width="100%"
                height={380}
                css={{ filter: "brightness(70%)" }}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible4(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    Previous Failures
                  </Text>
                  <Text b size={30} color="white">
                    ARPANET - Pioneer
                  </Text>
                  <Text size={12} weight="bold" color="white">
                    In 1964, Paul Baran published On Distributed Communications,
                    in which he critiqued then existing military communications
                    design as a vulnerable, centralized telecommunications
                    network. Diagrammed..."
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://f4.bcbits.com/img/a0342344220_10.jpg"
                objectFit="fill"
                width="100%"
                height={380}
                css={{ filter: "brightness(70%)" }}
              />
              <Card.Divider />
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible6(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
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
            Secondary - Military Digital Attack Simulation (Julius
            Chatters/Army)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
          />
          <Text id="modal-description">
            Like in this image, TCP technology first implemented by ARPANET is
            still being used in the military. By implementing TCP/IP, ARPANET
            laid the groundwork for a more scalable and robust network. This
            standardized protocol became the basis for data transmission and
            routing across Networks, which STILL powers some military
            communication today. This is to say that in the 70s-80s , ARPANET
            allowed the US military (its only user, aside from professors on the
            project) to be more connected than any other country could at this
            time. This shows a long term impact of ARPANET.
          </Text>
        </Modal.Body>
      </Modal>

      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings6}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Secondary - Cyber Telecom, 2019
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            In 1964, Paul Baran published On Distributed Communications, in
            which he critiqued then existing military communications design as a
            vulnerable, centralized telecommunications network. Diagrammed as a
            spoke model with a hub in the middle, an enemy could successfully
            take out a single point causing the network to fail. Baran advocated
            that the U.S. Department of Defense redo their entire communications
            system, moving to a decentralized, packet switched design.
          </Text>
          <Text b id="modal-description">
            This vulnerability revealed how weak hub based network system's
            where, giving birth to packet-switching desentrilized systems like
            ARPANET and its descendants. Baran's critique was proof to the
            government of an undescovered frontier, and his early realization of
            this issue landed him a leading job in ARPANET several years down
            the line.
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
            Primary - ARPANET/MILNET GEOGRAPHIC MAP(1984)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ARPANET_-_MILNT_Diagram_1984.jpg/1200px-ARPANET_-_MILNT_Diagram_1984.jpg?20170823102338"
          />
          <Text id="d">
            MilNet, which was the part of the ARPANET internetwork designated
            for unclassified United States Department of Defense traffic, is
            shown here in full fledge. With over 100 nodes throughout the entire
            country, the US was leagues ahead of any country in military
            communication, a gap that would stay until the Internet went public.
            This illustrates the widespread presence and connectivity of ARPANET
            within the military infrastructure. It showcases the curcial role
            ARPANET had in gaining an advantage through its creation of
            efficient communication, sharing of resources, and safe coordination
            between military institutions and research centers.
          </Text>
          <Text b>
            In many ways, ARPANET was the telegram of the 1970s-90s.
          </Text>
        </Modal.Body>
      </Modal>

      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings3}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Primary - Baran, Paul. (1974) ARPANET MANAGEMENT STUDY
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            "[Arpanet created because of] The need to develop alternatives for
            military communication systems having lower cost, lower delay and
            higher bandwidth capabilities than those currently in use, while
            still providing the end-to-end security and reliability needed"
          </Text>
          <Text id="modal-description">
            The statement emphasizes that the military required more capable,
            secure, and cost-effective communication networks, which is why
            ARPANET was developed. This exemplifies ARPANET's influence on the
            military by serving as a starting point for the invention of
            cutting-edge communication technologies that ultimately altered
            military operations, improved their communication capabilities, and
            boosted national security.
          </Text>
        </Modal.Body>
      </Modal>

      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings5}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Secondary - Cyber Telecom, 2019
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            “President Dwight D. Eisenhower created ARPA in early 1958 as part
            of a response to the perceived threat of the Soviet’s launch of
            Sputnik in October of 1957. Buoyed by the efforts of scientists in
            World War II in creating the Atomic Bomb, the ENIAC machine, and
            breaking the German ENIGMA code, among other monumental
            inventions"(Weber)
          </Text>
          <Text b id="modal-description">
            In the context of the Cold War, this reason for ARPANET is sensible.
            These quotes reveal that the military was both ambitious and hopeful
            in the ARPANET project, and miracoulously, they where able to
            succeed, changing the military and general world forever.
          </Text>
        </Modal.Body>
      </Modal>

      <Modal
        scroll
        width="600px"
        aria-labelledby="n"
        aria-describedby="d"
        {...bindings4}
      >
        <Modal.Header>
          <Text id="n" size={18}>
            Primary - Leonard Kleinrock(2019)
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            “We had a meeting with our subcontractor for hardware to present our
            complaint to them that nodes were down a half hour a day. Their
            reaction was, “You’re down a half hour out of 24. That’s about 2%.
            You’re getting 98% uptime. We’ve never gotten 98% uptime on anything
            we’ve built. How are you doing it?”
          </Text>
          <Text id="d">
            This shows how it was a breakthrough for the miilitary. Their
            subcontractor, ARPA(government agency) shows it's importance since
            as stated their was nothing like it before, so having it available
            for anytime would be a breakthrough for the communication aspect of
            the army.
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}
