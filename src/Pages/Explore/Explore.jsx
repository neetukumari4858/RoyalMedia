import React from "react";
import { Post } from "./../../Components/Post";
import { Flex, Heading, Button,Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserCard, Sidebar, PostCard } from "./../../Components/index";

function Explore() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex bgColor="#edf2f6" gap="1.3rem" justifyContent="space-between">
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="2rem" w="60rem" bgColor="#edf2f6">
          <Heading>Explore</Heading>
          <Flex gap={5} mt={3}>
            <Button
              fontSize="2xl"
              variant="ghost"
              bg="#288cfb"
              color="white"
              size="lg"
              h="3.8rem"
              borderRadius="1rem"
              _hover={{
                bgColor: "blue.500",
              }}
              _focus={{
                bgColor: "none",
              }}
              _active={{
                bgColor: "blue.600",
              }}
            >
              Tranding
            </Button>
            <Button
              fontSize="2xl"
              variant="ghost"
              bg="#288cfb"
              color="white"
              size="lg"
              h="3.8rem"
              borderRadius="1rem"
              _hover={{
                bgColor: "blue.500",
              }}
              _focus={{
                bgColor: "none",
              }}
              _active={{
                bgColor: "blue.600",
              }}
            >
              Latest
            </Button>
          </Flex>
          <PostCard />
          <PostCard />
          <PostCard />
        </Box>
        <Flex
          bgColor="gray.100"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          w="45rem"
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

export { Explore };
