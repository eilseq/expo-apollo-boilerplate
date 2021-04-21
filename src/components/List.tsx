import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useGraphQlQuery } from "../hooks";
import { Title } from "./Styled";
import { ElementFields } from "../constants/Types";
import styled from "styled-components/native";

const Card = ({ title, description }: ElementFields) => {
  const navigation = useNavigation();
  return (
    <CardContainer
      onPress={() => navigation.navigate("Details", { title, description })}
    >
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default () => {
  const { loading, data } = useGraphQlQuery();
  if (loading) return null;

  const { elements } = data;
  return (
    <ListContainer>
      {elements &&
        elements.map((element: any, i: number) => {
          const { title, description } = element;
          return <Card key={i} title={title} description={description} />;
        })}
    </ListContainer>
  );
};

const CardContainer = styled.Pressable`
  height: 60px;
`;

const ListContainer = styled.ScrollView`
  height: 100%;
`;
