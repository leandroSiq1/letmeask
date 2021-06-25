import { FormEvent, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import logoDarkImg from '../../assets/images/logoDark.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { useAuth } from '../../hooks/useAuth';
import { useMyTheme } from '../../hooks/useMyTheme';

import { Button } from '../../components/Button';

import { database } from '../../services/firebase';

import { Auth } from './styles';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const { title } = useMyTheme();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
  
    if(roomCode.trim() === "") {
      toast.info("😩 Digite um Código.");
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("😭 Este Código não existe.");
      return;
    }

    if (roomRef.val().endedAt) {
      toast.warning("😱 Sala já fechada.");
      return;
    }

    history.push(`rooms/${roomCode}`);
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
          { title === "dark" ? (<img src={logoDarkImg} alt="Letmeask" />) : (<img src={logoImg} alt="Letmeask" />) }

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </Auth>
  );
}