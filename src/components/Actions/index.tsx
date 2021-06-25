import Switch from 'react-switch';
import { shade } from 'polished';

import { useMyTheme } from '../../hooks/useMyTheme';
import { useAuth } from '../../hooks/useAuth';

import { Box, Button } from './styles';

type ActionsProps = {
  toggleTheme: () => void;
}

export function Actions({ toggleTheme }: ActionsProps) {
  const { title, colors } = useMyTheme();
  const { user, signOut } = useAuth();

  return (
    <Box>
      <Switch 
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={15}
        handleDiameter={20}
        offColor={shade(0.15, colors.switchOff)}
        onColor={colors.switchOn}       
      />

      { user ? <Button onClick={signOut}>Sair da Conta</Button> : "" }
    </Box>
  );  
}