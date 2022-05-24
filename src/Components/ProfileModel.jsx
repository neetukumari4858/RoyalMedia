import { Flex,Text,Avatar, Heading , Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    // Textarea,
    Button,
    // InputGroup,
    // Input,
    // InputRightElement,
    // FormLabel,
    Flex,
    Avatar,
    // Center,
    useDisclosure
    // Box
    } from "@chakra-ui/react"

const ProfileModel=({isOpenProfile, onCloseProfile })=>{
    const { isOpenProfile, onCloseProfile } = useDisclosure()

    return (
        <Modal onClose={onCloseProfile} isOpen={isOpenProfile} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Avatar
              name="avatar" size="2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"

              />
              <Flex>
                  <Heading>
                      Adarsh Balika
                  </Heading>
                  <Text>
                      Bio
                  </Text>
              </Flex>

          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseProfile }>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}
export {ProfileModel}