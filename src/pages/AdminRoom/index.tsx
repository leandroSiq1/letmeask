import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import logoDarkImg from '../../assets/images/logoDark.svg';
import deleteImg from '../../assets/images/delete.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { useMyTheme } from '../../hooks/useMyTheme';
import { database } from '../../services/firebase';

import { PageRoom } from './styles';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const theme = useMyTheme();
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <PageRoom>
      <header>
        <div className="content">
          { theme.title === "dark" ? (<img src={logoDarkImg} alt="Letmeask" />) : (<img src={logoImg} alt="Letmeask" />) }
          <div className="">
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>
      
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{ questions.length } Pergunta(s)</span>}
        </div>
        
        <div className="question-list">
          { questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover Pergunta" />
                </button>
              </Question>
            )
          }) }
        </div>
      </main>
    </PageRoom>
  );
}