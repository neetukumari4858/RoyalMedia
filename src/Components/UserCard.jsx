import { Avatar, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../redux/asyncThunks/userThunk";
// import { useEffect } from "react";

const UserCard = ({userData}) => {
  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.user)
  const { user, token } = useSelector((state) => state.auth);
  const {_id,firstName, lastName, username, profile,}=userData


  const followUserHandler = () => {
    dispatch(followUser({ _id, token }));
  };
  
  const unfollowUserHandler = () => {
    dispatch(unfollowUser({ _id, token }));
  };
  const isFollowing = userData.followers.some((eachUser)=>eachUser._id===user._id)
  return (
    <>
     
          <Flex
            w="30rem"
            h="8rem"
            mt={2}
            bgColor="#1A202C"
            borderRadius="1rem"
            align="center"
            gap={3}
            box-sizing=" border-box"
            key={_id}
          >
            <Avatar size="lg" ml="2rem" value="avatar" src={profile} />
            <Flex flexDirection="column" justifyContent="center" ml="1rem">
              <Heading as="h3" fontSize="1.5rem">
                {`${firstName} ${lastName}`}
              </Heading>
              <Text>{`@${username}`}</Text>
            </Flex>
           
            {isFollowing ? (
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
                onClick={unfollowUserHandler}
              >
                {" "}
                Following
              </Button>
            ) : (
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
                onClick={followUserHandler}
              >
                Follow
              </Button>
            )}
          </Flex>
        
    </>
  );
};
export { UserCard };
