import styled from 'styled-components';

export const ButtonDefault = styled.button`
  height: 50px;

  font-weight: 500;
  color: #ffffff;
  padding: 0 32px;

  background: #835afd;
  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: filter .2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: ${props => props.theme.colors.roomCode.background};
    border: 1px solid #835afd;
    font-weight: 500;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;