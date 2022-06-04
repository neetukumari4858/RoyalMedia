import React from "react";
import { useEffect,useState } from "react";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserCard, Sidebar, PostCard,Post  } from "./../../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/asyncThunks/index"

function Explore() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.post);
  const [userEditPost,setUserEditPost] = useState(null)
  useEffect(() => {
    if (status === "idle") {
      dispatch(getPost());
    }
  }, [dispatch, status, posts]);
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} userEditPost={userEditPost}
        setUserEditPost={setUserEditPost} />
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
          {posts?.length > 0 ? (
            posts.map((post) => {
              return <PostCard key={post.id} post={post} setUserEditPost={setUserEditPost}  onOpen={onOpen}/>;
            })
          ) : (
            <Heading color="gray.600">Nothing to Explore</Heading>
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
          <UserCard />
        </Flex>
      </Flex>
    </>
  );
}

export { Explore };
