import { Link } from 'react-router-dom'
import styled from "styled-components";
import variables from '../../styles/variables';

export const ButtonAddTask = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
`
