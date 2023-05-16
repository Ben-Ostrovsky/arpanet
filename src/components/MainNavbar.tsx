import { Navbar } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MainNavbar() {
  const router = useRouter();
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Content>
        <Link href={"/"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/"}>
            Ben Ostrovsky (home)
          </Navbar.Link>
        </Link>
        <Link href={"/hello"} passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname == "/hello"}>
            Benjamin Telanoff (hello)
          </Navbar.Link>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}
