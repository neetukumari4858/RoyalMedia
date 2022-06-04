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
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../redux/asyncThunks/postThunk'

const Post = ({ isOpen, onClose }) => {
  const dispatch=useDispatch()
  const {token}=useSelector((store)=>store.auth)
  const [postData,setpostdata]=useState("")
  const postCreateHandler=()=>{
    dispatch(createPost({postData,token}))
    setpostdata("")
    onClose()
    
  }
  return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl" fontSize="2rem">
        <ModalOverlay />
        <ModalContent 
            maxW="40rem">
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
              value={postData}
              onChange={(e)=>setpostdata(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              size="lg"
              fontSize="1.5rem"
              onClick={postCreateHandler}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
  
  export { Post }
  