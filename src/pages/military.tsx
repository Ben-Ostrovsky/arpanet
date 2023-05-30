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
          <Collapse title="Affect" expanded>
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

        <Grid.Container gap={2}>
          <Grid>
            <Card css={{ mw: "330px" }} variant="shadow">
              <Card.Header css={{ position: "absolute", zIndex: 1 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#16181A  "
                  >
                    {"arpanet inspired"}
                  </Text>
                  <Text h4 size={30} color="rgba(0, 0, 0, 0.6)">
                    Military Use of Internet
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src="https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
                objectFit="cover"
                width="100%"
                height={340}
              />
              <Card.Divider />
              <Card.Footer>
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid>
            <Card css={{ mw: "330px" }} variant="bordered">
              <Card.Header>
                <Text b>ARPANET/MILNET MAP</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ height: "250px", py: "$10" }}>
                <Image
                  width={10000}
                  height={200}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ARPANET_-_MILNT_Diagram_1984.jpg/1200px-ARPANET_-_MILNT_Diagram_1984.jpg?20170823102338"
                />
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="center" align="center">
                  <Button size="sm" light onPress={() => setVisible2(true)}>
                    Expand
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
        <Row justify="center" align="center">
          <Spacer x={2} />

          <Spacer x={2} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>ARPANET MANAGEMENT STUDY</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "250px", py: "$10" }}>
              <Text>
                "[Arpanet created because of] The need to develop alternatives
                for military communication systems having lower cost, lower
                delay and higher bandwidth capabilities than those currently in
                use, while still providing the end-to-end security and
                reliability needed"
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible3(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  {...bindings3}
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      (ARPANET MANAGEMENT STUDY(Paul Baran)(1974))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      "[Arpanet created because of] The need to develop
                      alternatives for military communication systems having
                      lower cost, lower delay and higher bandwidth capabilities
                      than those currently in use, while still providing the
                      end-to-end security and reliability needed"
                    </Text>
                    <Text id="modal-description">
                      The statement emphasizes that the military required more
                      capable, secure, and cost-effective communication
                      networks, which is why ARPANET was developed. This
                      exemplifies ARPANET's influence on the military by serving
                      as a starting point for the invention of cutting-edge
                      communication technologies that ultimately altered
                      military operations, improved their communication
                      capabilities, and boosted national security.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
          <Spacer x={2} />
          <Card css={{ mw: "330px" }} variant="bordered">
            <Card.Header>
              <Text b>
                The Arpanet and Its Impact on the State of Networking
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ height: "228px", py: "$10" }}>
              <Text>
                “We had a meeting with our subcontractor for hardware to present
                our complaint to them that nodes were down a half hour a day.
                Their reaction was, “You’re down a half hour out of 24. That’s
                about 2%. You’re getting 98% uptime. We’ve never gotten 98%
                uptime on anything we’ve built. How are you doing it?”
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="center" align="center">
                <Button size="sm" light onPress={() => setVisible4(true)}>
                  Expand
                </Button>
                <Modal
                  scroll
                  width="600px"
                  aria-labelledby="n"
                  aria-describedby="d"
                  {...bindings4}
                >
                  <Modal.Header>
                    <Text id="n" size={18}>
                      (Leonard Kleinrock(2019))
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text>
                      “We had a meeting with our subcontractor for hardware to
                      present our complaint to them that nodes were down a half
                      hour a day. Their reaction was, “You’re down a half hour
                      out of 24. That’s about 2%. You’re getting 98% uptime.
                      We’ve never gotten 98% uptime on anything we’ve built. How
                      are you doing it?”
                    </Text>
                    <Text id="d">
                      This shows how it was a breakthrough for the miilitary.
                      Their subcontractor, ARPA(government agency) shows it's
                      importance since as stated their was nothing like it
                      before, so having it available for anytime would be a
                      breakthrough for the communication aspect of the army.
                    </Text>
                  </Modal.Body>
                </Modal>
              </Row>
            </Card.Footer>
          </Card>
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
            (The Army is using fake social media feeds to help train soldiers in
            the most realistic environments imaginable. (Julius Chatters/Army))
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://www.c4isrnet.com/resizer/zo-j4tMLNC2ySxMbXKU4ypSE6Fg=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/archetype/ELWLPDCMNBFY5EA2W5D7V4RQGU.jpg"
          />
          <Text id="modal-description">
            This shows how ARPANET had a long term impact in the army since it
            forged the beginnings of the internet that is now being used
            constantly by the military.
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
            (ARPANET/MILNET GEOGRAPHIC MAP(1984))
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            width={400}
            height={300}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ARPANET_-_MILNT_Diagram_1984.jpg/1200px-ARPANET_-_MILNT_Diagram_1984.jpg?20170823102338"
          />
          <Text id="d">
            This illustrates the widespread presence and connectivity of ARPANET
            within the military infrastructure. It showcases the curcial role
            ARPANET had in gaining an advantage through its creation of
            efficient communication, sharing of resources, and coordination
            between military institutions and research centers.
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
}
