import styled from "styled-components"
import variables from "../../styles/variables"
import * as enums from '../../utils/enums/Tarefa'
import { Button } from "../../styles"

type TagProps = {
  $priority?: enums.Priority
  $status?: enums.Status
  $parameter: 'status' | 'priority'
}

function returnBackgroundColor(props: TagProps) {
  if (props.$parameter === 'priority') {
    if (props.$priority === enums.Priority.URGENT) return variables.red
    if (props.$priority === enums.Priority.IMPORTANT) return variables.yellow2
  } else {
    if (props.$status === enums.Status.PENDING) return variables.yellow
    if (props.$status === enums.Status.CONCLUDED) return variables.green
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #FCFCFC;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(props) => returnBackgroundColor(props)};
  margin-right: 16px;
  display: inline-block;
  color: #fff;
`

export const Description = styled.textarea`
  color: #8B8B8B;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 95%;
  margin: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${variables.red};
`
