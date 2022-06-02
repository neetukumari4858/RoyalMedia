import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { UserCard, Sidebar, Post, ProfileCard } from "./../../Components/index";
import { useDisclosure } from "@chakra-ui/hooks";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="#1A202C"
        color="white"
        gap="1.3rem"
        justifyContent="space-between"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" align="center" w="60rem" bgColor="#1A202C">
          <ProfileCard />
        </Box>
        <Flex
          bgColor="#2D3748"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          w="37rem"
          h="40rem"
          bottom="0"
        >
          <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
            Who to follow
          </Heading>
          <UserCard />
          <UserCard />
          <UserCard />
        </Flex>
      </Flex>
    </>
  );
}

export { Profile };
