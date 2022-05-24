import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    Button,
  } from '@chakra-ui/react'
  
  const Post = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl" fontSize="2rem">
        <ModalOverlay />
        <ModalContent maxW="40rem">
          <ModalHeader size="xl" fontSize="2rem">
            Add Post
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody h="10rem">
            <Textarea
              size="xl"
              fontSize="1.5rem"
              placeholder="Write something interesting..."
              resize="none"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              size="lg"
              fontSize="1.5rem"
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
  
  export { Post }
  