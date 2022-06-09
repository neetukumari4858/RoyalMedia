import React from "react";
import { useEffect, useState } from "react";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Suggestion, Sidebar, PostCard, Post } from "./../../Components/index";
import { useDispatch, useSelector } from "react-redux";

import { getPost, getAllUser } from "../../redux/asyncThunks/index";

import {
  trendingPostHandler,
  latestPostHandler,
} from "./../../redux/slices/postSlice";

function Explore() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [userEditPost, setUserEditPost] = useState(null);
  useEffect(() => {

    dispatch(getPost());
    dispatch(getAllUser());
  }, []);

  const trendingHandler = () => {
    dispatch(trendingPostHandler());
  };

  const sortPostChange = () => {
    dispatch(latestPostHandler());
  };

  return (
    <>
      <Post
        isOpen={isOpen}
        onClose={onClose}
        userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}
      />
      <Flex
        bgColor="#1A202C"
        color="white"
        h="100%"
        w="100%"
        justifyContent="space-evenly"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="2rem" w="60rem" bgColor="#1A202C">
          <Heading mt="1rem">Explore</Heading>
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
              onClick={trendingHandler}
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
              onClick={sortPostChange}
            >
              Latest
            </Button>
          </Flex>
          {posts?.length > 0 ? (
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  setUserEditPost={setUserEditPost}
                  onOpen={onOpen}
                />
              );
            })
          ) : (
            <Heading color="gray.600">Nothing to Explore</Heading>
          )}
        </Box>
        <Suggestion />
      </Flex>
    </>
  );
}

export { Explore };
