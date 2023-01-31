import React from "react";
import { Image } from "react-bootstrap";
interface Props {
  images: urlI[];
}

export interface urlI {
  url: string;
}
export const ImageListContainer = (props: Props) => {
  const { images } = props;

  const response = images.map((img) => {
    return <Image fluid={true} thumbnail={true} src={img.url} />;
  });

  return (
    <div style={{ display: "flex" }} className={"w-50 p-5"}>
      {response}
    </div>
  );
};
