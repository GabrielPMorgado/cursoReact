import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App(){

    return (
      <Heading>Ola mundo
        <button>
          <TimerIcon/>
        </button>
      </Heading>
    );
};

export  {App};