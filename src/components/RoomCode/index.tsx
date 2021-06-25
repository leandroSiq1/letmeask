import copyImg from '../../assets/images/copy.svg';

import { RoomCodeButton } from './styles';

type RoomCodeProps = {
  code: String;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(`${props.code}`);
  }

  return (
    <RoomCodeButton onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </RoomCodeButton>
  );
}