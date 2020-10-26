import { Box, Stack } from "@chakra-ui/core";
import { MdHome, MdMovie, MdPerson } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const routes = {
  home: "/",
  profile: "/profile",
  talents: "/talents",
};

function BottomNav() {
  const { pathname } = useLocation();
  return (
    <Stack
      position="fixed"
      transform=" translate(-50%, 0%);"
      left="50%"
      bottom={0}
      width="100%"
      maxWidth="500px"
      height="50px"
      bg="white"
      isInline
      spacing={16}
      justify="center"
      align="center"
      rounded="lg"
      boxShadow="0px -5px 5px 0px rgba(0,0,0,0.1)"
      shouldWrapChildren
    >
      <Link to={routes.home}>
        <Box
          as={MdHome}
          size="32px"
          opacity={pathname === routes.home ? 1 : 0.5}
        />
      </Link>
      <Link to={routes.talents}>
        <Box
          as={FaTheaterMasks}
          size="32px"
          opacity={pathname === routes.talents ? 1 : 0.5}
        />
      </Link>
      <Link to="#">
        <Box as={MdMovie} size="32px" opacity={0.5} />
      </Link>
      <Link to={routes.profile}>
        <Box
          as={MdPerson}
          size="32px"
          opacity={pathname === routes.profile ? 1 : 0.5}
        />
      </Link>
    </Stack>
  );
}

export default BottomNav;
