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
          <Text h3> The Beginning</Text>
          <Text>
            The Soviet Union launches the satellite Sputnik, marking the
            beginning of the Space Age and triggering the Space Race between the
            United States and the Soviet Union. The launch of Sputnik raises
            concerns about national security and technological superiority in
            the United States.
          </Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
