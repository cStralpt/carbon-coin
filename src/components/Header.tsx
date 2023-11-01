ReadableStreamDefaultController;
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ConnectToWalletButton } from "./ConnectToWalletButton";

export default function Header() {
  return (
    <header>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">CarbonCoin</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              How to
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {/* <Button as={Link} color="primary" href="#" variant="flat"> */}
            {/*   CONNECT */}
            {/* </Button> */}
            <ConnectToWalletButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
