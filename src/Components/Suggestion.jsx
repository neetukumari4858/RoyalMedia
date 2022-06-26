import { Flex, Heading } from "@chakra-ui/react";
import { UserCard } from "./UserCard";
import { useSelector } from "react-redux";

const Suggestion = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  const otherUsers = users?.filter(
    (eachUser) => eachUser?.username !== user?.username
  );

  return (
    <>
      <Flex
        bgColor="#2D3748"
        padding="1.5rem"
        gap="1rem"
        borderRadius="1rem"
        position={{ base: "static", md: "sticky" }}
        top="2rem"
        border="1px solid red"
        bottom="0"
        height={{
          base: "100%",
          md: "50%",
          xl: "25%",
        }}
        h={{ md: "40rem" }}
        direction={{ base: "row", md: "column" }}
        overflowX={{ base: "scroll", md: "hidden" }}
      >
        <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
          Who to follow
        </Heading>

        {otherUsers?.map((userData) => {
          return <UserCard key={userData._id} userData={userData} />;
        })}
      </Flex>
    </>
  );
};

export { Suggestion };
