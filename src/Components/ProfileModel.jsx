import {
  Flex,
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
  InputGroup,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
const ProfileModel = ({ isOpen, onOpen, onClose }) => {
  const { user } = useSelector((store) => store.auth);
  const { profile, firstName, lastName, bio } = user;

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
            <Avatar name="avatar" size="2xl" src={profile} />
            <Box position="absolute" bottom="-2" right="17rem">
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
                {`${firstName} ${lastName}`}
              </FormLabel>

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
