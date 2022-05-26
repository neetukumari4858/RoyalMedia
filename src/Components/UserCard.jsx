import { Avatar, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
const UserCard = () => {
  return (
    <>
      <Flex flexDirection="column" gap="1rem" 
      >
        <Flex
          w="30rem"
          h="8rem"
          mt={2}
          bgColor="gray.300"
          borderRadius="1rem"
          align="center"
          gap={3}
        >
          <Avatar
            size="xl"
            ml="0.5rem"
            value="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
          />
          <Flex flexDirection="column" justifyContent="center" ml="1rem">
            <Heading as="h3" fontSize="1.5rem">
              Neetu Kumari
            </Heading>
            <Text>@neetuKumari</Text>
          </Flex>
          <Button
            leftIcon={<BiPlus color="blue.200" fontSize="2rem" />}
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
            Follow
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export { UserCard };
