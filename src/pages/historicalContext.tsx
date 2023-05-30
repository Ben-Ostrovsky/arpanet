import { useTheme } from "next-themes";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Text } from "@nextui-org/react";
import "react-vertical-timeline-component/style.min.css";

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
      <VerticalTimeline lineColor="#0072F5">
        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="October 4th, 1957"
        >
          <Text h3> Exigence</Text>
          <Text weight={"thin"}>
            The Soviet Union launches the satellite Sputnik, marking the
            beginning of the Space Age and triggering the Space Race between the
            United States and the Soviet Union. The launch of Sputnik raises
            concerns about national security and technological superiority in
            the United States.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1958"
        >
          <Text h3> The Beginning</Text>
          <Text weight={"thin"}>
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
          <Text weight={"thin"}>
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
          <Text h3> ARPANET</Text>
          <Text weight={"thin"}>
            Lawrence Roberts, an ARPA scientist, publishes a plan for a computer
            network that would allow researchers to share and access resources
            remotely. This plan becomes the blueprint for ARPANET.
          </Text>
          <Text>
            Soon, ARPA issues a Request for Quotation (RFQ) to build ARPANET.
            Several institutions, including Bolt, Beranek and Newman (BBN),
            submit proposals.{" "}
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1967-1969"
        >
          <Text h3> Node One</Text>
          <Text>
            Soon, The first ARPANET node is established when BBN successfully
            connects the computers at the University of California, Los Angeles
            (UCLA) and the Stanford Research Institute (SRI). This connection is
            the birth of ARPANET, the precursor to the modern Internet.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={styles}
          contentArrowStyle={{ borderRight: "10px solid " + styles.background }}
          iconStyle={{ background: "#0072F5" }}
          date="1967-1969"
        >
          <Text h3> Node One</Text>
          <Text>
            Soon, The first ARPANET node is established when BBN successfully
            connects the computers at the University of California, Los Angeles
            (UCLA) and the Stanford Research Institute (SRI). This connection is
            the birth of ARPANET, the precursor to the modern Internet.
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
