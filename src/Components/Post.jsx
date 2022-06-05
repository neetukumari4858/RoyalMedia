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
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost,editPost } from '../redux/asyncThunks/postThunk'
import {toast} from "react-toastify"

const Post = ({ isOpen, onClose,userEditPost  }) => {
  const dispatch=useDispatch()
  const {token}=useSelector((store)=>store.auth)
  const [postData,setpostdata]=useState("")

  useEffect(()=>{
    setpostdata(userEditPost?.content)

  },[userEditPost])
  
  const postCreateHandler = () => {
    if (userEditPost) {
      const postDetail = {
        _id: userEditPost._id,
      }
      dispatch(editPost({ postDetail, postData, token }))
      setpostdata('')
      onClose()
      toast.success('Post edited!')
    } else {
      if (postData) {
        dispatch(createPost({ postData, token }))
        setpostdata("")
        onClose()
        toast.success('Post created!')
      }
    }
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
  