import React from "react";
export interface NameProps {
  name: string;
}
export const Name = (props: NameProps) => {
  return <p>my name is {props.name}</p>;
};
