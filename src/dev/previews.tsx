import React, { useState } from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { InputContainer } from "../containers/InputContainer";

const ComponentPreviews = () => {
  const [prompt, setPrompt] = useState("dem0 prompt");
  const handleSubmit = () => {};
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/InputContainer">
        <InputContainer
          handleSubmit={handleSubmit}
          isLoading
          placeholder={prompt}
          setPrompt={setPrompt}
        />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
