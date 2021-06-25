import { Link, useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import logoDarkImg from '../../assets/images/logoDark.svg';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { useMyTheme } from '../../hooks/useMyTheme';

import { database } from '../../services/firebase';

import { Auth } from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const { title } = useMyTheme();  

  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    
    if (newRoom.trim() === '') {
      return;
    }
    
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Auth>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />        
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          { title === "light" ? <img src={logoImg} alt="Letmeask" /> : <img src={logoDarkImg} alt="Letmeask" /> }
          <h2>Cria uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Auth>
  );
}