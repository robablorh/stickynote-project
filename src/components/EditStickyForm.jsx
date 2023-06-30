/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Textarea} from "@chakra-ui/react";
import { editSticky } from "../reduxtk/slice";
import { useDispatch } from "react-redux";

const EditStickyForm = ({ onClose, task }) => {
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [description, setDescription] = useState(task.description);
  const [image, setImage] = useState(task.image);
  const [err, setErr] = useState("")

  const dispatch = useDispatch()

    if(title.trim() === "" || description.trim() === "" || date.trim() === ""){
      setErr("The title, description and date fields cannot be empty")
      return
    }


  const handleupdate = async (taskid) => {
    const newUpdate = {id: taskid, title, date, description, image}
    dispatch(editSticky(newUpdate))
    onClose()
  }

  return (
    <div>
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
      <h3 style={{color: "red"}}>{err}</h3>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={() => handleupdate(task.id)}>
          Update
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </div>
  );
};

export default EditStickyForm;
