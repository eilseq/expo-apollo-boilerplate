import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15%;
  background: ${({ theme }) => theme.background};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const Content = styled.Text`
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Separator = styled.View`
  margin-vertical: 30px;
  height: 1px;
  width: 80%;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.Button``;
