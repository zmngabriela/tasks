import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    papdding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  ul {
    padding: 0
  }
`

export const Title = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border-color: #666666;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  width: 100%;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  margin-right: 8px;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
