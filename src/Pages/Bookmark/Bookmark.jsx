import React from "react";
import { Post } from "./../../Components/Post";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserCard, Sidebar } from "./../../Components/index";

function Bookmark() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="#1A202C"
        gap="1.3rem"
        color="white"
        justifyContent="space-between"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="3rem" w="60rem" bgColor="#1A202C">
          <Heading>Bookmark</Heading>

          <Text fontSize="2rem">No Bookmarks Yet</Text>
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

export { Bookmark };
