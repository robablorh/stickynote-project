/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { createSticky } from "../reduxtk/slice";
import { useEffect, useState } from "react";
import { StickyForm } from "./StickyForm";
import EditStickyForm from "./EditStickyForm";

const Stickynote = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Flex alignItems="center" gap="4">
          <Avatar
            size={"md"}
            src={task.image}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 2,
              h: 2,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading as="h3" fontSize={"2xl"} fontFamily={"body"}>
            {task.title}
          </Heading>
        </Flex>

        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {task.description}
        </Text>

        <Text>{task.date}</Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            onClick={onOpen}
          >
            Edit
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{ bg: "blue.500" }}
            _focus={{ bg: "blue.500" }}
          >
            Delete
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Makes some changes</ModalHeader>
          <ModalCloseButton />
          <EditStickyForm onClose={onClose} task={task} />
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Stickynote;
