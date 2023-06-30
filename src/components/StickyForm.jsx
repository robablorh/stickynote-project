/* eslint-disable react/prop-types */
import { useState } from "react"
import {v4 as uuid} from "uuid"
import {useDispatch} from "react-redux"
import { createSticky } from "../reduxtk/slice";


import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Textarea} from "@chakra-ui/react";

export const StickyForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [err, setErr] = useState();

  const dispatch = useDispatch()


  const handleSave = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "" || date.trim() === "") {
    setErr("Title, Description and date cannot be empty");
    return;
  }

    const newSticky = { id: uuid(), title, date, description, image };
    dispatch(createSticky(newSticky));
    onClose();
  };
  

  return (
    <>
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Add some notes"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Image Link</FormLabel>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>

        <h3 style={{color: 'red'}}>{err}</h3>

      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={handleSave}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </>
  );
};
  