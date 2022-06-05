import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import {
  UserCard,
  Sidebar,
  Post,
  ProfileCard,
  PostCard,
} from "./../../Components/index";
import { useDisclosure } from "@chakra-ui/hooks";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/asyncThunks/index";

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [userEditPost,setUserEditPost] = useState(null)

  const userPost = posts.filter(
    (userpost) => userpost.username === user.username
  );
  useEffect(() => {
    dispatch(getPost());
  });


  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} userEditPost={userEditPost}
        setUserEditPost={setUserEditPost}/>
      <Flex
        bgColor="#1A202C"
        color="white"
        h="100%"
        w="100%"
        justifyContent="space-evenly"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="3rem" w="60rem" bgColor="#1A202C">
          <ProfileCard />
          {userPost.map((post) => {
            return <PostCard setUserEditPost={setUserEditPost} key={post._id} post={post} onOpen={onOpen} />;
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
