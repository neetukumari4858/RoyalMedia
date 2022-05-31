import {
  Avatar,
  Button,
  Flex,
  Text,
  Heading,
  Link,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { ProfileModel } from "./ProfileModel";
import {logoutUser} from "./../redux/slices/authSlice"
import { useDispatch, useSelector } from "react-redux";
import {FiLogOut} from "react-icons/fi"
import { toast } from "react-toastify";

const ProfileCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,token}=useSelector((state)=>state.auth)
  const {firstName, lastName,username, bio, link, profile} =user

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
    toast.success('Loggedout Successfully.')
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
            <IconButton
              icon={<FiLogOut size="2.5rem"  />}
              size="4rem"
              mr="4rem"
              bg="transparent"
              onClick={logoutHandler}
            />
        </Flex>
        <Avatar
          flexDirection="column"
          align="center"
          mt="-3rem"
          src={profile}
          
          name="avatar"
          boxSize="15rem"
        />
      </Flex>
      <Flex flexDirection="column" align="center">
        <Heading>{token ? `${firstName} ${lastName}` : null}</Heading>
        <Text fontSize="xl" fontWeight="bold">
        {token ? `@${username}` : null}
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
          {bio}
        </Text>
        <Link
          fontSize="1.5rem"
          href="https://adarshbalika.netlify.app/"
          isExternal
          color="blue.500"
        >
         {link}
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
