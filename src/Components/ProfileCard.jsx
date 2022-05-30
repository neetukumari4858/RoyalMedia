import {
  Avatar,
  Button,
  Flex,
  Text,
  Heading,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { ProfileModel } from "./ProfileModel";
import {logoutUser} from "./../redux/slices/authSlice"

const ProfileCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
    // toast.success('Loggedout Successfully.')
  }

  const { isOpen,onOpen,onClose } = useDisclosure();
  return (
    <Flex
      flexDirection="column"
      bg="#FFFFFF"
      borderRadius="1rem"
      h="40rem"
      w="55rem"
      mt="2rem"
      justifyContent="center"
    >
      <Flex flexDirection="column" align="center">
        <ProfileModel
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
         <Flex justifyContent="flex-end" w="100%">
          <Tooltip label="Logout" fontSize="2xl">
            <IconButton
              icon={<FiLogOut />}
              size="2xl"
              bg="transparent"
              onClick={logoutHandler}
            />
          </Tooltip>
        </Flex>
        <Avatar
          flexDirection="column"
          align="center"
          mt="-3rem"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
          name="avatar"
          boxSize="15rem"
        />
      </Flex>
      <Flex flexDirection="column" align="center">
        <Heading>Adarsh Balika</Heading>
        <Text fontSize="xl" fontWeight="bold">
          @adarshbalika
        </Text>
        <Button
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
          onClick={onOpen}
        >
          Edit Profile
        </Button>
        <Text mt="1rem" fontSize="1.5rem">
          I am fresher in developement
        </Text>
        <Link
          fontSize="1.5rem"
          href="https://adarshbalika.netlify.app/"
          isExternal
          color="blue.500"
        >
          https://adarshbalika.netlify.app/
        </Link>
        <Flex gap="6rem">
          <Flex flexDirection="column">
            <Heading>0</Heading>
            <Text fontSize="1.5rem" fontWeight="bold">
              Following
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Heading>0</Heading>
            <Text fontSize="1.5rem" fontWeight="bold">
              Post
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Heading>0</Heading>
            <Text fontSize="1.5rem" fontWeight="bold">
              Followers
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export { ProfileCard };
