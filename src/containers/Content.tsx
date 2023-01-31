import React, { useState } from "react";
import { ImageListContainer, urlI } from "./ImageListContainer";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { InputContainer } from "./InputContainer";

const placeholder = "Two cats playing guitar on the moon";
const url = "http://localhost:8080/v1/image";
const defaultSize = "1024x1024";

interface requestI {
  n: number;
  prompt: string;
  size: string;
}

export const Content = () => {
  const [prompt, setPrompt] = useState<string>(placeholder);
  const [response, setResponse] = useState<urlI[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePostRequest = async () => {
    const request: requestI = { n: 2, prompt: prompt, size: defaultSize };
    return await axios
      .post(url, request)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
        responseAlert("success", "success");
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
        responseAlert(err.message, "danger");
      });
  };

  const responseAlert = (key: string, variant: "success" | "danger") => {
    return (
      <Alert key={key} variant={variant}>
        success
      </Alert>
    );
  };

  return (
    <>
      {response ? (
        <ImageListContainer images={response} />
      ) : // <div className="spacer" />
      null}
      <InputContainer
        isLoading={isLoading}
        setPrompt={setPrompt}
        handleSubmit={handlePostRequest}
        placeholder={placeholder}
      />
    </>
  );
};
