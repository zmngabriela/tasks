import styled from "styled-components"

// type OmitedProps = Omit<Props, 'counter'| 'status' | 'criterion'>
// type Props = {
//   active: boolean
// }

export const Card = styled.div<{ $active: boolean }>`
  padding: 8px;
  border: 1px solid ${props => props.$active ? '#1E90FF' : '#a1a1a1'};
  background-color: ${props => props.$active ? '#fff' : '#FCFCFC'};
  color: ${props => props.$active ? '#1E90FF' : '#5E5E5E'};
  border-radius: 8px;
  cursor: pointer;
`

export const Counter = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
