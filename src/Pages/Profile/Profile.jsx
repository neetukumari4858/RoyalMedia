import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { UserCard, Sidebar, Post, ProfileCard ,PostCard} from "./../../Components/index";
import { useDisclosure } from "@chakra-ui/hooks";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/asyncThunks/index"

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const userPost = posts.filter(
    (userpost) => userpost.username === user.username
  );

  useEffect(() => {
    dispatch(getPost());
  });

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="#1A202C"
        color="white"
        gap="1.3rem"
        h="80rem"
        justifyContent="space-between"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="3rem" w="60rem" bgColor="#1A202C">
          <ProfileCard />
          {userPost.map((post) => {
            return <PostCard onOpen={onOpen} key={post._id} post={post} />;
          })}
        </Box>
        <Flex
          bgColor="#2D3748"
          padding="1.5rem"
          gap="1rem"
          flexDirection="column"
          borderRadius="1rem"
          position="sticky"
          top="2rem"
          w="38rem"
          h="40rem"
          bottom="0"
        >
          <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
            Who to follow
          </Heading>
          <UserCard />
        </Flex>
      </Flex>
    </>
  );
}

export { Profile };
