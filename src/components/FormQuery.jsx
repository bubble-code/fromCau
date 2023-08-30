import { useState } from "react";
import { Textarea, Button } from "@material-tailwind/react";
import { useFetchQuery } from "../hooks/fetchQuery";

export const FormQuery = ({ fetQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetQuery(inputValue);
  };
  
  return (
    <form
      className="flex items-start gap-4 justify-start"
      onSubmit={handleSubmit}
    >
      <Textarea
        placeholder="Escribe tu pregunta..."
        value={inputValue}
        onChange={handleInputChange}
        className="mr-2"
        rows={1}
      />
      <Button type="submit" color="blue" ripple="light" size="regular">
        Enviar
      </Button>
    </form>
  );
};

