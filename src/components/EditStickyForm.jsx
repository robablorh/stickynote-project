/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter, Textarea} from "@chakra-ui/react";


const EditStickyForm = ({ onClose, task }) => {
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [description, setDescription] = useState(task.description);
  const [image, setImage] = useState(task.image);





  const handleupdate = async (taskid) => {
    const newUpdate = {id: taskid, title, date, description, image}

    try {
        const res = await fetch(`http://localhost:3000/tasks/${taskid}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUpdate)
        });

        if(res.ok){
            console.log("Data updated successfully")
        }else{
            console.log("Error during update")
        }
        
    } catch (error) {
        console.error(error)
    }
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
