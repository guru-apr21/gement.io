import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 5%;
  margin-top: 3px;
  ${({ $style }) => $style ?? {}};
`;

export const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
  ${({ $style }) => $style ?? {}};
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: #353535;
  vertical-align: middle;
  ${({ $style }) => $style ?? {}};
`;

export const MessageSentBy = styled.p`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
  ${({ $style }) => $style ?? {}}
`;

export const MessageSentAt = styled.span`
  font-size: 0.6em;
  font-weight: bolder;
`;
