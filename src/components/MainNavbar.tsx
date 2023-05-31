import { Button, Navbar, Spacer, Switch } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import App from "@/pages/_app"; //To switch dark theme?

export default function MainNavbar() {
  const router = useRouter();
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Navbar>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor={"primary"}
        variant={"highlight"}
      >
        <Link href={"/"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/"}>Home</Navbar.Link>
        </Link>
        <Link href={"/timeline"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/timeline"}>
            Timeline
          </Navbar.Link>
        </Link>
        <Link href={"/military"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/military"}>
            Military
          </Navbar.Link>
        </Link>
        <Link href={"/economy"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/economy"}>
            Economy
          </Navbar.Link>
        </Link>
        <Link href={"/spread"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/spread"}>
            Spread of Information
          </Navbar.Link>
        </Link>
      </Navbar.Content>
      <Navbar.Brand />
    </Navbar>
  );
}
