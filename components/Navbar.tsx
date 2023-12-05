import React, { FC } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { Flex, Spacer, Box, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";
const Navbar: FC = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      px="5vw"
      gap="2"
      h={`11.2vh`}
      
    >
      <Link href={`/`}>
        <Image src={`/logo.svg`} alt="logo" width={100} height={24} priority />
      </Link>
      <Spacer />
      <ButtonGroup
        gap="5"
        alignItems="center"
        display={{ base: "none", lg: "flex", md: "flex" }}
      >
        <Link
          href={`/stories`}
          as="button"
          style={{
            fontWeight: `400`,
            fontSize: `24px`,
          }}
        >
          Stories
        </Link>
        <Box as="button" fontWeight={`400`} fontSize={`2xl`}>
          Contact
        </Box>
        <Box as="button" fontWeight={`400`} fontSize={`2xl`}>
          Sign Up
        </Box>
        <Button
          color={`white`}
          style={{ backgroundColor: "#0086B0", fontWeight: "400" }}
          fontSize={`2xl`}
          h={`33px`}
        >
          Get Started
        </Button>
      </ButtonGroup>
      <Box display={{ base: "block", lg: "none", md: "none" }}>
        <CiMenuBurger style={{ fontSize: "2rem" }} />
      </Box>
    </Flex>
  );
};

export default Navbar;
