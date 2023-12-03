import React, { FC } from "react";
import Image from "next/image";
import { Flex, Spacer, Box, Button, ButtonGroup } from "@chakra-ui/react";
const Navbar: FC = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      px="5vw"
      gap="2"
      h={`92px`}
    >
      <Box>
        <Image src={`/logo.svg`} alt="logo" width={100} height={24} priority />
      </Box>
      <Spacer />
      <ButtonGroup
        gap="5"
        alignItems="center"
        display={{ base: "none", lg: "flex", md: "flex" }}
      >
        <Button variant={`unstyled`} fontWeight={`400`}>
          Stories
        </Button>
        <Button variant={`unstyled`} fontWeight={`400`}>
          Contact
        </Button>
        <Button variant={`unstyled`} fontWeight={`400`}>
          Sign Up
        </Button>
        <Button
          color={`white`}
          style={{ backgroundColor: "#0086B0", fontWeight: "400" }}
        >
          Get Started
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
