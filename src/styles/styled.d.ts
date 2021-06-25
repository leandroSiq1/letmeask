import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      switchOn: string;
      switchOff: string;

      background: string;
      text: string;

      roomCode: {
        background: string;
        text: string;
      }
    },
  }
}