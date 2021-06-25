import styled from 'styled-components';

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${props => props.theme.colors.roomCode.background};
  color: ${props => props.theme.colors.roomCode.text};
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;
  align-items: center;
  
  div {
    height: 100%;
    background: #835afd;
    padding: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    width: 230px;

    display: block;
    align-self: center;
    flex: 1;

    padding: 0 16px 0 12px;

    font-size: 14px;
    font-weight: 500;
  }
`;