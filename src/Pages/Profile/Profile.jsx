import React from 'react'
import { Flex, Heading,Box} from "@chakra-ui/react";
import { UserCard, Sidebar,Post,PostCard,ProfileCard} from "./../../Components/index";
import { useDisclosure } from "@chakra-ui/hooks";
function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    <>
        <Post isOpen={isOpen} onClose={onClose} />
        <Flex bgColor="#edf2f6" gap="1.3rem" justifyContent="space-between">
          <Sidebar onOpen={onOpen} />
          <Box flexDirection="column" align="center" w="60rem" bgColor="#edf2f6">
            <ProfileCard/>
          <PostCard/>    
          </Box>  
          <Flex
            bgColor="gray.100"
            padding="1.5rem"
            gap="1rem"
            flexDirection="column"
            borderRadius="1rem"
            position="sticky"
            top="2rem"
            w="45rem"
            h="40rem"
            bottom="0"
          >
            <Heading as="h4" size="xl" w="30rem" borderBottom="1px">
              Who to follow
            </Heading>
            <UserCard />
            <UserCard />
            <UserCard />
          </Flex>
        </Flex>
      </>
  )
}

export {Profile}