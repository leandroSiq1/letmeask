import styled from 'styled-components';

export const Box = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 160px;
  padding: 8px 20px;

  background: transparent;
  border: 0;

  font-size: 17px;
  font-weight: 500;
  color: #835afd;

  transition: .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    color: #ea4335;
  }
`;