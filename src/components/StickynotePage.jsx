/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StickyForm } from "./StickyForm";
import Stickynote from "./Stickynote";
import {
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Stack,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { createSticky } from "../reduxtk/slice";

export const StickynotePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Tasks = useSelector((state) => state.tasks.tasks);
  

  return (
    <div>
      <Stack direction="row">
        <Button className="btncreate" onClick={onOpen}>
          +
        </Button>
      </Stack>

      <SimpleGrid spacing={10} minChildWidth="300px">
        {Tasks &&
          Tasks.map((task, idx) => <Stickynote key={task + idx} task={task} />)}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make some notes</ModalHeader>
          <ModalCloseButton />
          <StickyForm onClose={onClose} />
        </ModalContent>
      </Modal>
    </div>
  );
};

