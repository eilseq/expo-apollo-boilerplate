import * as React from "react";
import { MainContainer, Separator, Title } from "../components/Styled";
import List from "../components/List";

export const Home = () => {
  return (
    <MainContainer>
      <Title>Home</Title>
      <Separator />
      <List />
    </MainContainer>
  );
};
