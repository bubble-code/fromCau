import { useState } from "react";
import { Textarea, Button } from "@material-tailwind/react";

export const FormQuery = ({ fetQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza las acciones que deseas al enviar el formulario, por ejemplo, enviar datos al servidor
    console.log("Valor enviado:", inputValue);
    fetQuery(inputValue);
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

