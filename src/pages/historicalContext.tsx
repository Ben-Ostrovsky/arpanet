import { useTheme } from "next-themes";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Text, Image, Spacer } from "@nextui-org/react";
import "react-vertical-timeline-component/style.min.css";
import Head from "next/head";

export default function About() {
  const { theme } = useTheme();
  // Define the styles for light and dark themes
  const lightStyles = {
    background: "#ECEDEE    ",
    color: "black",
  };

  const darkStyles = {
    background: "rgba(236,237,238,0.2)    ",
    color: "#ffffff    ",
  };

  const { resolvedTheme } = useTheme();
  const getTheme = (currentTheme: any) => {
    return currentTheme === "dark" ? darkStyles : lightStyles;
  };
  const styles = getTheme(resolvedTheme);

  return (
    <div>
      <Head>
        <title>HC | Arpanet</title>
      </Head>
      <VerticalTimeline lineColor="#697177">
        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1957"
        >
          <Text h3> Sputnik 1 - Exigence</Text>
          <Spacer />
          <Image
            src={
              "https://www.nasa.gov/sites/default/files/images/190844main_GPN-2002-000166_full.jpg"
            }
            width={350}
          />
          <Spacer />
          <Text span>
            The Soviet Union launches the satellite Sputnik, marking the
            beginning of the Space Age and triggering the Space Race between the
            United States and the Soviet Union. The launch of Sputnik raises
            concerns about national security and technological superiority in
            the United States.
          </Text>
          <Spacer />
          <Text small> Image Credit - NASA </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1958"
        >
          <Text h3> The Beginning</Text>
          <Text span>
            In response to the Soviet Union's advancements in space technology,
            the United States creates the Advanced Research Projects Agency
            (ARPA) within the Department of Defense. ARPA's mission is to foster
            scientific and technological research with potential military
            applications.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1962"
        >
          <Text h3> Early Days</Text>
          <Text span>
            J.C.R. Licklider becomes the first director of ARPA's Information
            Processing Techniques Office (IPTO). Licklider envisions a "galactic
            network" that connects computers and facilitates collaboration among
            researchers.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1965-1967"
        >
          <Text h3>ARPANET</Text>
          <Spacer />
          <Image
            src={
              "https://technicshistory.files.wordpress.com/2019/06/arpanet-e1559361718915.png?w=1088"
            }
            width={350}
          />
          <Spacer />
          <Text span>
            Lawrence Roberts, an ARPA scientist, publishes a plan for a computer
            network that would allow researchers to share and access resources
            remotely. This plan becomes the blueprint for ARPANET.
          </Text>
          <Spacer />
          <Text span>
            Soon, ARPA issues a Request for Quotation (RFQ) to build ARPANET.
            Several institutions, including Bolt, Beranek and Newman (BBN),
            submit proposals.{" "}
          </Text>
          <Spacer />
          <Text small> Image Credit - Tech History </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1967-1969"
        >
          <Text h3> Node One</Text>
          <Text span>
            Soon, The first ARPANET node is established when BBN successfully
            connects the computers at the University of California, Los Angeles
            (UCLA) and the Stanford Research Institute (SRI). This connection is
            the birth of ARPANET, the precursor to the modern Internet.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#9750DD          " }}
          date="1971"
        >
          <Text h3> Information Sharing and Collaboration</Text>
          <Text span>
            Researchers at the University of Southern California (USC) and
            Stanford University used ARPANET to collaborate on the development
            of the ARPANET Network Measurement Center (NMC).
          </Text>
          <Text>
            "The ARPANET project has successfully shown the feasibility of a
            network of computers, connected to one another by medium- and
            high-speed communication links." - Lawrence Roberts, ARPA scientist,
            in a 1967 paper.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#9750DD          " }}
          date="1972"
        >
          <Text h3> Email: revolutionizing long-distance communication</Text>
          <Spacer />
          <Image
            src={" https://pbs.twimg.com/media/CbnBXdHUkAAq1Wo.jpg"}
            width={350}
          />
          <Spacer />
          <Text span>
            Ray Tomlinson sent the first email message between two
            ARPANET-connected computers, marking a significant milestone in
            electronic communication.
          </Text>
          <Text>
            "The @ sign seemed to make sense. I used it to indicate that the
            user was 'at' some other host rather than being local." - Ray
            Tomlinson, on choosing the @ symbol for email addresses.
          </Text>
          <Spacer />
          <Text small> Image Credit - Twming.com </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{
            borderRight: "10px solid " + styles.background,
          }}
          iconStyle={{ background: "#0072F5" }}
          date="1974"
        >
          <Text h3> Going Public </Text>
          <Text span>
            The first public demonstration of ARPANET takes place, showcasing
            the potential of networked computing. This demonstration sparks
            interest and excitement about the possibilities of interconnected
            computers.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#9750DD          " }}
          date="1975-1978"
        >
          <Text h3> A Growing Community</Text>
          <Text span>
            The number of ARPANET nodes reaches 111, connecting a growing number
            of institutions and users.
          </Text>
          <Text>
            "By the end of 1975, twenty-nine sites were connected to the
            ARPANET. This early network is now an operational resource
            supporting a large and growing research community in the computer
            science and related disciplines." - Vint Cerf and Robert Kahn, in
            their 1978 paper on TCP/IP.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1980-1989"
        >
          <Text h3> Success</Text>
          <Spacer />
          <Image
            src={
              " https://personalpages.manchester.ac.uk/staff/m.dodge/cybergeography/atlas/arpanet4.gif"
            }
            width={350}
          />
          <Spacer />
          <Text span>
            The number of hosts on ARPANET surpasses 1,000, reflecting its
            expanding user base. The network becomes a vital tool for
            researchers, scientists, and academics across the United States.
          </Text>
          <Spacer />
          <Text span>
            The implementation of TCP/IP as the standard protocol suite for
            ARPANET and other interconnected networks laid the groundwork for a
            robust, scalable, and interoperable network. This standardized
            protocol became the basis for data transmission and routing across
            the Internet, allowing other networks to follow suite. And soon,
            they did.
          </Text>
          <Spacer />
          <Text small> Image Credit - personalpages.manchester.ac.uk </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1990"
        >
          <Text h3> The Final Days </Text>
          <Text span>
            ARPANET was officially decommissioned in 1990. The decommissioning
            process began in 1989 when the National Science Foundation (NSF),
            which had taken over the management of the network, decided to
            transition from ARPANET to the NSFNET (National Science Foundation
            Network). The NSFNET provided a more robust infrastructure and
            expanded connectivity. By April 30, 1990, ARPANET ceased to exist as
            an operational network, marking the end of its service.
          </Text>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1991"
        >
          <Text h3> Unrestricted: The birth of the open Internet </Text>
          <Text span>
            The National Science Foundation lifts restrictions on the commercial
            use of the Internet. This decision paves the way for the Internet's
            commercialization and its widespread adoption by businesses and the
            general public.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1995"
        >
          <Text h3> A New Beginning </Text>
          <Spacer />
          <Image
            src={
              "https://th-thumbnailer.cdn-si-edu.com/rDLz2qKiySCycofmRRCzGI-qdMc=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/201212140131421995-smithsonian-470x251.jpg"
            }
            width={350}
          />
          <Spacer />
          <Text span>
            The NSFNET, a backbone network that served as a major component of
            the Internet infrastructure, is decommissioned. This event marks the
            completion of the transition from a government-funded network to a
            commercially-driven Internet.
          </Text>
          <Spacer />
          <Text small> Image Credit - thumbnailer.cdn-si-edu </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
