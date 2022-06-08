import { Flex, Heading } from "@chakra-ui/react";
import { UserCard } from "./UserCard";
import { useSelector } from "react-redux";

const Suggestion = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  const otherUsers = users?.filter((existUser) => existUser._id !== user?._id);
  // console.log(otherUsers, "jsdk");
  return (
    <>
      <Flex
        bgColor="#2D3748"
        padding="1.5rem"
        gap="1rem"
        flexDirection="column"
        borderRadius="1rem"
        position="sticky"
        top="2rem"
        h="40rem"
        bottom="0"
      >
        <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
          Who to follow
        </Heading>

        {otherUsers?.map((userData) => {
          // {console.log(userData,"userDta");}
          return <UserCard key={userData._id} userData={userData} />;
        })}
      </Flex>
    </>
  );
};

export { Suggestion };
