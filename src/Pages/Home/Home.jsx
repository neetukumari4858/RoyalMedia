import { Post } from "./../../Components/Post";
import { AiFillPlusCircle } from "react-icons/ai";
import { Flex, Heading, Button, Text, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserCard, Sidebar, PostCard } from "./../../Components/index";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Post isOpen={isOpen} onClose={onClose} />
      <Flex
        bgColor="#1A202C"
        gap="1rem"
        color={"white"}
        justifyContent="space-between"
      >
        <Sidebar onOpen={onOpen} />
        <Box flexDirection="column" mt="3rem" w="60rem" bgColor="#1A202C">
          <Heading>Home</Heading>
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
              {" "}
              Write something interesting...
            </Text>
          </Text>
          <PostCard />
          <PostCard />
          <PostCard />
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
          <UserCard />
          <UserCard />
        </Flex>
      </Flex>
    </>
  );
}

export { Home };
