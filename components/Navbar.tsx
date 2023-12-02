import React, { FC } from "react";
import Image from "next/image";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
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
      <ButtonGroup gap="2" display={{ base: "none", lg: "flex", md: "flex" }}>
        <Box>Contact</Box>
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Get Started</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
