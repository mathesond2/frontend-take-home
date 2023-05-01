import { Heading } from "@chakra-ui/layout";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import './Navbar.css';

export default function Navbar() {
  return (
      <header className="navbar">
        <Heading as="h1" size="lg" marginY={4}>NPM Package Search</Heading>
        <ThemeToggle />
      </header>
  )
}