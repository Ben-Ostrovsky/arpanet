import Head from "next/head";
import {
  Button,
  Text,
  Spacer,
  Container,
  Row,
  Image,
  Grid,
  Col,
} from "@nextui-org/react";
export default function Home() {
  return (
    <div>
      <Spacer />
      <Row justify="center">
        <Text
          h1
          css={{
            textGradient: "150deg, #63a4ff 0%, #83eaf1 180%",
          }}
        >
          {"Advanced Research Projects Agency Network (ARPANET)"}
        </Text>
        <Spacer y={5} />
      </Row>
      <Grid.Container gap={1} justify="center">
        <Row>
          <Grid>
            <Col>
              <Text h5>
                The Advanced Research Projects Agency Network (ARPANET), the
                forerunner of the Internet, was a pioneering long-haul network
                funded by the U.S. Department of Defense’s Advanced Research
                Projects Agency (ARPA). It served as the test bed for many areas
                of internetworking technology development and testing, and acted
                as the central backbone during the development of the Internet.
                The ARPANET was built using packet-switching computers
                interconnected by leased lines.
              </Text>
              <Spacer y={3} />
              <Image
                src={
                  "https://d26toa8f6ahusa.cloudfront.net/wp-content/uploads/2019/09/24135714/U-Archives-D-Computer-Science-16x9.jpg"
                }
                objectFit="revert"
                alt="Default Image"
                width={500}
                height={800}
              />
            </Col>
          </Grid>
          <Grid>
            <Image
              src={
                "https://brewminate.com/wp-content/uploads/2019/03/031219-76-History-Internet-Technology.jpg"
              }
              objectFit="cover"
              width={600}
              height={600}
            />
          </Grid>
        </Row>
      </Grid.Container>
    </div>
  );
}
