import { Avatar, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../redux/asyncThunks/userThunk";
import { useEffect } from "react";
const UserCard = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const allusers = users.filter(
    (eachauser) => eachauser.username !== user.username
  );
  return (
    <>
      {allusers.map((eachauser,index) => {
        return (
          <Flex
            w="30rem"
            h="8rem"
            mt={2}
            bgColor="#1A202C"
            borderRadius="1rem"
            align="center"
            gap={3}
            box-sizing=" border-box"
            key={index}
          >
            <Avatar
              size="lg"
              ml="2rem"
              value="avatar"
              src={eachauser.profile}
            />
            <Flex flexDirection="column" justifyContent="center" ml="1rem">
              <Heading as="h3" fontSize="1.5rem">
                {`${eachauser.firstName} ${eachauser.lastName}`}
              </Heading>
              <Text>{`@${eachauser.username}`}</Text>
            </Flex>
            <Button
              leftIcon={<BiPlus color="blue.200" fontSize="2rem" />}
              fontSize="2xl"
              variant="ghost"
              bg="#288cfb"
              color="white"
              size="lg"
              h="3.8rem"
              box-sizing=" border-box"
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
        );
      })}
    </>
  );
};
export { UserCard };
