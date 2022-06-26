import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Flex, Heading, Button, Text, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Suggestion, Sidebar, PostCard, Post } from "./../../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getAllUser } from "../../redux/asyncThunks/index";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [userEditPost, setUserEditPost] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPost());
      dispatch(getAllUser());
    }
  }, [dispatch, status, posts]);

  const followUsers = users.filter((userFollower) =>
    userFollower.followers?.some(
      (follower) => follower.username === user.username
    )
  );

  const allpost = posts.filter(
    (post) =>
      post.username === user.username ||
      followUsers?.some((followuser) => followuser.username === post.username)
  );

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
        gap="1rem"
        color={"white"}
        h="150rem"
        w="100%"
        // border="1px solid red"
        justifyContent="space-evenly"
        direction={["column", "column", "row", "row"]}
      >
        <Sidebar onOpen={onOpen} />
        <Box
          flexDirection="column"
          w={{ base: "100%", md: "60rem" }}
          h="100%"
          bgColor="#1A202C"
          border="1px solid green"
        >
          <Heading mt="3rem">Home</Heading>
          <Text
            bg="#2D3748"
            w="100%"
            h="5rem"
            mt={4}
            borderRadius="1rem"
            p="1rem"
            onClick={onOpen}
            cursor="pointer"
          >
            <Button
              rightIcon={<AiFillPlusCircle />}
              color="blue.500"
              variant="ghost"
              fontSize="2rem"
              _hover={{
                bgColor: "transparent",
              }}
              _focus={{
                borderColor: "transparent",
                bgColor: "transparent",
              }}
              _active={{
                bgColor: "transparent",
              }}
            ></Button>
            <Text color="gray.400" ml={20} mt={-9} fontSize="1.3rem">
              Write something interesting...
            </Text>
          </Text>
          {allpost?.length ? (
            [...allpost].reverse().map((post) => {
              return (
                <PostCard
                  onOpen={onOpen}
                  setUserEditPost={setUserEditPost}
                  key={post.id}
                  post={post}
                />
              );
            })
          ) : (
            <Heading color="gray.600">
              Follow some user to see there feed
            </Heading>
          )}
        </Box>
        <Suggestion />
      </Flex>
    </>
  );
}

export { Home };
