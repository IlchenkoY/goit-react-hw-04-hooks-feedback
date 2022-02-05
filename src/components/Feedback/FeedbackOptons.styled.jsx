import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: tomato;
  border: 2px solid black;
  border-radius: 5px;
  padding-bottom: 4px;
  &:hover {
    cursor: pointer;
    background-color: ${props => {
      switch (props.eventOption) {
        case 'good':
          return 'green';
        case 'neutral':
          return 'yellow';
        case 'bad':
          return 'red';
        default:
          return '#000';
      }
    }};
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
