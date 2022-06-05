
import { useEffect ,useState} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Flex, Heading, Button, Text, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserCard, Sidebar, PostCard,Post} from "./../../Components/index";
import { useDispatch, useSelector } from "react-redux";
import { getPost} from "../../redux/asyncThunks/index"

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [userEditPost, setUserEditPost] = useState(null)

  useEffect(() => {
      dispatch(getPost());

  }, [dispatch,  posts]);

  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} userEditPost={userEditPost}
       setUserEditPost={setUserEditPost}/>
      <Flex
        bgColor="#1A202C"
        gap="1rem"
        color={"white"}
        h="100%"
        w="100%"
        justifyContent="space-evenly"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" w="60rem" h="100%" bgColor="#1A202C">
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
            />
            <Text color="gray.400" ml={20} mt={-9} fontSize="1.3rem">
              Write something interesting...
            </Text>
          </Text>
          {posts?.length > 0 ? (
            posts.map((post) => {
              return <PostCard onOpen={onOpen}
              setUserEditPost={setUserEditPost} key={post.id} post={post} />;
            })
           
          ) : (
            <Heading color="gray.600">Nothing to Home</Heading>
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

export { Home };
