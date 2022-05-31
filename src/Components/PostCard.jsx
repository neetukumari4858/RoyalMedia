import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
const PostCard = () => {
  return (
    <>
      <Flex
        w="60rem"
        mt={9}
        padding="2rem"
        bgColor="#2D3748"
        borderRadius="1rem"
        flexDirection="column"
        gap="1rem"
        justifyContent={"center"}
        align={"center"}
        // z-index={1}
      >
        <Flex justifyContent="space-between" w="55rem" >
          <Flex gap="1rem" w="50rem">
            <Avatar
              name="avatar"
              size="xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
            />
            <Heading>
              Neetu Kumari
              <Text fontSize="xl" color="gray.500">
                @neetuKumari
              </Text>
            </Heading>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDotsVertical />}
                fontSize="1.8rem"
                // bg="transparent"
                color="black"
                bgColor="#edf2f6"
                borderRadius="1.5rem"
              ></IconButton>
            </PopoverTrigger>
            <PopoverContent w="5xs" paddingRight="1rem">
              <PopoverCloseButton />
              <PopoverArrow />
              <PopoverBody>
                <Flex
                  flexDirection="column"
                  justifyContent="flexStart"
                  gap="0.2rem"
                  padding="1rem"
                >
                  <Button
                    leftIcon={<FaEdit />}
                    fontSize="1.5rem"
                    bg="transparent"
                  >
                    Edit
                  </Button>
                  <Button
                    leftIcon={<FaTrash />}
                    fontSize="1.5rem"
                    bg="transparent"
                  >
                    Delete
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Box gap="2rem"  w="55rem" >
          <Text fontSize="1.6rem">
          The first rule of social media is that everything changes all the time. ...
          </Text>
          <Flex gap="3rem">
            <IconButton
              icon={<BiHeart />}
              fontSize="1.8rem"
              bg="transparent"
              borderRadius="50%"
              _hover={{
                bgColor: "gray.200",
              }}
              _focus={{
                borderColor: "transparent",
              }}
            />
            <IconButton
              icon={<BsBookmark />}
              fontSize="1.8rem"
              bg="transparent"
              borderRadius="50%"
              _hover={{
                bgColor: "gray.200",
              }}
              _focus={{
                borderColor: "transparent",
              }}
            />
          </Flex>
        </Box>
        <Flex gap="1rem"  w="55rem">
          <Avatar
            name="avatar"
            size="md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
          />
          <InputGroup>
            <Input
              borderColor="gray.400"
              placeholder="Write a comment"
              fontSize="1.5rem"
              size="lg"
            />
            <InputRightElement mr="2rem">
              <Button
                variant="ghost"
                fontSize="1.5rem"
                _hover={{
                  bgColor: 'transparent',
                }}
                _focus={{
                  borderColor: 'transparent',
                  bgColor: 'transparent',
                }}
                _active={{
                  bgColor: 'transparent',
                }}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          gap="1rem"
          bgColor="#1A202C"
          padding="1rem"
          borderRadius="1rem"
          alignItems="center"
          w="55rem"
        >
          <Avatar
            name="avatar"
            size="md"
            src="https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589729.jpg"
          />
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <Flex flexDirection="column">
              <Heading as="h5" size="md">
                Neetu Kumari
              </Heading>
              <Text>This is comment.</Text>
            </Flex>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  icon={<BsThreeDotsVertical />}
                  fontSize="1.8rem"
                  bg="transparent"
                  color="white"
                ></IconButton>
              </PopoverTrigger>
              <PopoverContent w="5xs" paddingRight="1rem">
                <PopoverCloseButton />
                <PopoverArrow />
                <PopoverBody>
                  <Flex
                    flexDirection="column"
                    justifyContent="flexStart"
                    gap="0.2rem"
                    padding="1rem"
                  >
                    <Button
                      leftIcon={<FaEdit />}
                      fontSize="1.5rem"
                      bg="transparent"
                    >
                      Edit
                    </Button>
                    <Button
                      leftIcon={<FaTrash />}
                      fontSize="1.5rem"
                      bg="transparent"
                    >
                      Delete
                    </Button>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};
export { PostCard };
