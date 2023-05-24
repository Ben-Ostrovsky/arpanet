import { Button, Navbar, Switch } from "@nextui-org/react";
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
    <Navbar isBordered variant={"sticky"}>
      <Navbar.Brand />
      <Navbar.Content
        enableCursorHighlight
        activeColor={"primary"}
        variant={"highlight"}
      >
        <Link href={"/"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/"}>Home</Navbar.Link>
        </Link>
        <Link href={"/historicalContext"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/historicalContext"}>
            Historical Context
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
        <Link href={"/militaryEdge"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/militaryEdge"}>
            Military Edge
          </Navbar.Link>
        </Link>
      </Navbar.Content>
      <Navbar.Content>
        <Button>Theme set to default for now</Button>
      </Navbar.Content>
    </Navbar>
  );
}
