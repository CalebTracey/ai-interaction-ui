import { PromptInput } from "../components/PromptInput";
import React, { Dispatch, SetStateAction } from "react";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";

interface Props {
  isLoading: boolean;
  setPrompt: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  placeholder: string;
}

export const InputContainer = (props: Props) => {
  const { isLoading, setPrompt, handleSubmit, placeholder } = props;

  return (
    <Stack
      gap={3}
      className="align-items-center justify-content-center col-lg-5 mx-auto"
    >
      <PromptInput
        isLoading={isLoading}
        setPrompt={setPrompt}
        placeHolder={placeholder}
      />
      <Button
        onClick={handleSubmit}
        className={"w-25 m-5 mx-auto"}
        variant={"outline-primary"}
        disabled={isLoading}
      >
        Submit
      </Button>
    </Stack>
  );
};
