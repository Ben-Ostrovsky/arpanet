import { Button, Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MainNavbar() {
  const router = useRouter();
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Brand />
      <Navbar.Content
        enableCursorHighlight
        activeColor={"primary"}
        variant={"underline"}
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
        <Link href={"/tech"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/militaryEdge"}>
            Military Edge
          </Navbar.Link>
        </Link>
      </Navbar.Content>
      <Navbar.Brand />
    </Navbar>
  );
}
