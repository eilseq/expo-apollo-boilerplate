import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MainContainer,
  Separator,
  Title,
  Content,
  Button,
} from "../components/Styled";

export const Details = ({ route }: any) => {
  const navigation = useNavigation();
  const { title, description } = route.params;
  return (
    <MainContainer>
      <Title>{title}</Title>
      <Separator />
      <Content>{description}</Content>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
    </MainContainer>
  );
};
