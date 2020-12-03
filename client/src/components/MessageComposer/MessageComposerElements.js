import styled from 'styled-components';

export const MessageComposerForm = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const MessageComposerInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;

  &:focus {
    outline: none;
  }
`;

export const MessageComposerButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;
