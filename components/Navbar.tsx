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
          <Box
            as="button"
            fontWeight={`400`}
            _hover={{
              color: "#937869",
            }}
            fontSize={`2xl`}
          >
            Contact
          </Box>
          <Box
            as="button"
            fontWeight={`400`}
            fontSize={`2xl`}
            _hover={{
              color: "#937869",
            }}
            onClick={onOpen}
          >
            Sign Up
          </Box>
          <button
            color={`white`}
            className="bn632-hover bn19"
            style={{
              // background:
              //   "linear-gradient(90deg, rgba(255,187,153,1) 0%, rgba(213,102,41,1) 64%, rgba(197,87,27,1) 100%)",
              fontWeight: "400",
            }}
            // fontSize={`2xl`}
            // h={`33px`}
            onClick={onOpen}
            // _hover={{
            //   backgroundColor: "#000000",
            // }}
          >
            <span className="bn54span">Get Started</span>
          </button>
        </ButtonGroup>
        <Box display={{ base: "block", lg: "none", md: "none" }}>
          <CiMenuBurger style={{ fontSize: "2rem" }} />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
