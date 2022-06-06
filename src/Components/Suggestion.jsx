import { Flex } from "@chakra-ui/react";
import { UserCard } from "./UserCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Suggestion = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const otherUsers = users?.filter((existUser) => existUser._id !== user?._id);
  console.log(otherUsers, "other");
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <>
      {otherUsers.map((userData, index) => {
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
            <UserCard key={userData._id} userData={userData} />
          </Flex>
        );
      })}
    </>
  );
};

export { Suggestion };
