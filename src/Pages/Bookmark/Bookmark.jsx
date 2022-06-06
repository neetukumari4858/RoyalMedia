import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Suggestion, Sidebar, Post, PostCard  } from "./../../Components/index";
import { useSelector } from "react-redux";

function Bookmark() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bookmarks } = useSelector((state) => state.auth);

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="#1A202C"
        color="white"
        justifyContent="space-evenly"
        w="100%"
        h="100rem"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="3rem" w="60rem" bgColor="#1A202C">
          <Heading>Bookmark</Heading>
          {bookmarks?.length > 0 ? (
            bookmarks.map((post) => {
              return <PostCard key={post._id} post={post} />;
            })
          ) : (
            <Heading color="gray.600">Nothing in bookmark</Heading>
          )}
        </Box>
        <Flex
          bgColor="#2D3748"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          h="40rem"
          bottom="0"
        >
          <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
            Who to follow
          </Heading>
          <Suggestion />
        </Flex>
      </Flex>
    </>
  );
}

export { Bookmark };
