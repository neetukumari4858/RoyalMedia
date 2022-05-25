import {
  Flex,
  // Text,
  // Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Avatar,
  Center,
  Box,
  Textarea,
  
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
const ProfileModel = ({ isOpen, onOpen, onClose }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} onOpen={onOpen}>
      <ModalOverlay />
      <ModalContent maxW="45rem" h="44rem">
        <ModalHeader si5ze="xl" fontSize="2rem">
          Edit Profile
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody h="10rem">
          <Center position="relative">
            <Avatar
              name="avatar"
              size="2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
            />
            <Box position="absolute" bottom="-2" right="17rem" >
              <FormLabel
                cursor="pointer"
                borderRadius="full"
                bgColor="white"
                padding="0.1rem"
              >
                <Input type="file" visibility="hidden" position="absolute" />
                <AiFillCamera fontSize="2rem" color="gray" />
              </FormLabel>
            </Box>
          </Center>
          <InputGroup>
            <Flex flexDirection="column">
              <FormLabel fontSize="2xl" w="45rem" htmlFor="userName">
                Name
              </FormLabel>
              <Input
                id="userName"
                borderColor="gray.400"
                placeholder="Write you name"
                fontSize="1.5rem"
                size="lg"
                w="42rem"
              />
              {/* <InputRightElement mr="1rem">
                <Button
                  variant="ghost"
                  fontSize="1.5rem"
                  _hover={{
                    bgColor: "blue.500",
                  }}
                  _focus={{
                    bgColor: "none",
                  }}
                  _active={{
                    bgColor: "blue.600",
                  }}
                ></Button>
              </InputRightElement> */}
              <FormLabel fontSize="2xl" htmlFor="bio">
                Bio
              </FormLabel>
              <Textarea
                id="bio"
             
                fontSize="1.5rem"
                placeholder="Write something interesting..."
                size="lg"
                resize="none"
                w="42rem"
              />
              <FormLabel fontSize="2xl" htmlFor="website">
                Website
              </FormLabel>
              <Input
                id="website"
                borderColor="gray.400"
                placeholder="Portfolio URL"
                fontSize="1.5rem"
                size="lg"
                w="42rem"
              />
            </Flex>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          {/* <Button onClick={onClose}>Save</Button> */}
          <Button
          onClick={onClose}
          fontSize="2xl"
          variant="ghost"
          bg="#288cfb"
          color="white"
          size="lg"
          h="3.8rem"
          mt={2}
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
          save
        </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export { ProfileModel };
