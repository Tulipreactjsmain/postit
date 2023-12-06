import React, { FC } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import {
  Flex,
  Spacer,
  Box,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { LoginModal } from ".";

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Flex
        minWidth="max-content"
        alignItems="center"
        px="5vw"
        gap="2"
        h={`11.2vh`}
      >
        <Link href={`/`}>
          <Image
            src={`/logo.svg`}
            alt="logo"
            width={100}
            height={24}
            priority
          />
        </Link>
        <Spacer />
        <ButtonGroup
          gap="5"
          alignItems="center"
          display={{ base: "none", lg: "flex", md: "flex" }}
        >
          <Link
            href={`/stories`}
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
          <Box as="button" fontWeight={`400`} fontSize={`2xl`} onClick={onOpen}>
            Sign Up
          </Box>
          <Button
            color={`white`}
            style={{ backgroundColor: "#0086B0", fontWeight: "400" }}
            fontSize={`2xl`}
            h={`33px`}
            onClick={onOpen}
          >
            Get Started
          </Button>
        </ButtonGroup>
        <Box display={{ base: "block", lg: "none", md: "none" }}>
          <CiMenuBurger style={{ fontSize: "2rem" }} />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
