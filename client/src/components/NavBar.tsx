import { Box, HStack } from "@chakra-ui/react";
import { MdHome, MdMovie, MdPerson } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const routes = {
  home: "/",
  profile: "/profile",
  talents: "/talents",
  auditions: "/auditions",
};

function NavBar() {
  const { pathname } = useLocation();
  return (
    <HStack
      width="100%"
      maxWidth="500px"
      bg="white"
      spacing={[10, 32]}
      justify="center"
      rounded="lg"
      shouldWrapChildren
      fontSize={["24px", "32px"]}
    >
      <Link to={routes.home}>
        <Box as={MdHome} opacity={pathname === routes.home ? 1 : 0.5} />
      </Link>
      <Link to={routes.talents}>
        <Box
          as={FaTheaterMasks}
          opacity={pathname === routes.talents ? 1 : 0.5}
        />
      </Link>
      <Link to={routes.auditions}>
        <Box as={MdMovie} opacity={pathname === routes.auditions ? 1 : 0.5} />
      </Link>
      <Link to={routes.profile}>
        <Box as={MdPerson} opacity={pathname === routes.profile ? 1 : 0.5} />
      </Link>
    </HStack>
  );
}

export default NavBar;
