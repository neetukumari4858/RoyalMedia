import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import {
  BsThreeDotsVertical,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import { FaEdit, FaTrash, FaHeart } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { likePost, dislikePost } from "../redux/asyncThunks/postThunk";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../redux/asyncThunks/authThunk";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { token, bookmarks } = useSelector((state) => state.auth);
  const {
    _id,
    comments,
    firstName,
    lastName,
    username,
    profile,
    likes,
    content,
    createdAt,
  } = post;
  const isLike = post?.likes.likedBy?.find((likedUser) => likedUser);

  const isbookmark = bookmarks.some(
    (bookmarkedPost) => bookmarkedPost._id === _id
  );
  const likePostHandler = () => {
    dispatch(likePost({ _id, token }));
  };

  const dislikePostHandler = () => {
    dispatch(dislikePost({ _id, token }));
  };

  const addBookmarkHandler = () => {
    if (isbookmark) {
      dispatch(removeBookmark({ _id, token }));
    } else {
      dispatch(addBookmark({ _id, token }));
    }
  };

  return (
    <>
      <Flex
        w="60rem"
        mt={9}
        padding="2rem"
        bgColor="#2D3748"
        borderRadius="1rem"
        flexDirection="column"
        gap="1rem"
        justifyContent={"center"}
        align={"center"}
        key={_id}
      >
        <Flex justifyContent="space-between" w="55rem">
          <Flex gap="1rem" w="50rem">
            <Avatar name="avatar" size="xl" src={profile} />
            <Heading>
              {`${firstName} ${lastName}`}
              <Text fontSize="xl" color="gray.500">
                {`@${username}`}
              </Text>
              <Text fontSize="md">{createdAt}</Text>
            </Heading>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDotsVertical />}
                fontSize="1.8rem"
                color="black"
                bgColor="#edf2f6"
                borderRadius="1.5rem"
              ></IconButton>
            </PopoverTrigger>
            <PopoverContent w="5xs" paddingRight="1rem">
              <PopoverCloseButton />
              <PopoverArrow />
              <PopoverBody>
                <Flex
                  flexDirection="column"
                  justifyContent="flexStart"
                  gap="0.2rem"
                  padding="1rem"
                >
                  <Button
                    leftIcon={<FaEdit />}
                    fontSize="1.5rem"
                    bg="transparent"
                    color="#1A202C"
                  >
                    Edit
                  </Button>
                  <Button
                    leftIcon={<FaTrash />}
                    fontSize="1.5rem"
                    bg="transparent"
                    color="#1A202C"
                  >
                    Delete
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Box gap="2rem" w="55rem">
          <Text fontSize="1.6rem">{content}</Text>
          <Flex gap="3rem">
            <IconButton
              icon={
                !isLike ? (
                  <BiHeart color="white" onClick={likePostHandler} />
                ) : (
                  <FaHeart color="#E53E3E" onClick={dislikePostHandler} />
                )
              }
              fontSize="1.8rem"
              bg="none"
              // color="white"
              borderRadius="50%"
              _hover={{
                bgColor: "gray.200",
                color: "black",
              }}
              _focus={{
                borderColor: "transparent",
              }}
            />
            <Text fontSize="1.8rem">{likes.likeCount} Likes</Text>
            <IconButton
              icon={isbookmark ? <BsBookmarkFill /> : <BsBookmark />}
              fontSize="1.8rem"
              bg="transparent"
              borderRadius="50%"
              _hover={{
                bgColor: "gray.200",
              }}
              _focus={{
                borderColor: "transparent",
              }}
              onClick={addBookmarkHandler}
            />
            <Text fontSize="1.8rem" ml="-2.8rem">
              Bookmark
            </Text>
          </Flex>
        </Box>
        <Flex gap="1rem" w="55rem">
          <Avatar name="avatar" size="md" src={profile} />
          <InputGroup>
            <Input
              borderColor="gray.400"
              placeholder="Write a comment"
              fontSize="1.5rem"
              size="lg"
            />
            <InputRightElement mr="2rem">
              <Button
                variant="ghost"
                fontSize="1.5rem"
                _hover={{
                  bgColor: "transparent",
                }}
                _focus={{
                  borderColor: "transparent",
                  bgColor: "transparent",
                }}
                _active={{
                  bgColor: "transparent",
                }}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        {comments?.length > 0
          ? comments.map(
              ({ _id, commentData, firstName, lastName, profile }) => {
                return (
                  <Flex
                    gap="1rem"
                    bgColor="#1A202C"
                    padding="1rem"
                    borderRadius="1rem"
                    alignItems="center"
                    w="55rem"
                    key={_id}
                  >
                    <Avatar name="avatar" size="md" src={profile} />
                    <Flex
                      justifyContent="space-between"
                      w="100%"
                      alignItems="center"
                    >
                      <Flex flexDirection="column">
                        <Heading as="h5" size="md">
                          {`${firstName} ${lastName}`}
                        </Heading>
                        <Text fontSize="md">{`${createdAt}`}</Text>
                        <Text>{commentData}</Text>
                      </Flex>
                      <Popover>
                        <PopoverTrigger>
                          <IconButton
                            icon={<BsThreeDotsVertical />}
                            fontSize="1.8rem"
                            bg="transparent"
                            color="white"
                          ></IconButton>
                        </PopoverTrigger>
                        <PopoverContent w="5xs" paddingRight="1rem">
                          <PopoverCloseButton />
                          <PopoverArrow />
                          <PopoverBody>
                            <Flex
                              flexDirection="column"
                              justifyContent="flexStart"
                              gap="0.2rem"
                              padding="1rem"
                            >
                              <Button
                                leftIcon={<FaEdit />}
                                fontSize="1.5rem"
                                bg="transparent"
                                color="#1A202C"
                              >
                                Edit
                              </Button>
                              <Button
                                leftIcon={<FaTrash />}
                                fontSize="1.5rem"
                                bg="transparent"
                                color="#1A202C"
                              >
                                Delete
                              </Button>
                            </Flex>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
                  </Flex>
                );
              }
            )
          : null}
      </Flex>
    </>
  );
};
export { PostCard };
