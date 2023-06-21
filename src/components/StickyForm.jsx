/* eslint-disable react/prop-types */
import { useState } from "react"
import {v4 as uuid} from "uuid"
import { useDispatch, useSelector } from "react-redux";
import { createSticky } from "../reduxtk/slice";


import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Textarea} from "@chakra-ui/react";

export const StickyForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("")

  const dispatch = useDispatch()
  const stickyStore = useSelector((store) => store.tasks.tasks);
  console.log(stickyStore);

  const handleSave = async (e) =>{
    e.preventDefault()
    const newSticky = {id: uuid(), title, date, description, image}
    
    try {
       const response = await fetch("http://localhost:8000/tasks", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newSticky)
       });

       if(response.ok){
        dispatch(createSticky(newSticky));
        console.log("Saved successfully")
       }else{
        console.log("Error while saving: ", response.status)
       }

    } catch (error) {
      console.Error(error)
    }
  }

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
          <FormLabel>Description</FormLabel>
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
  