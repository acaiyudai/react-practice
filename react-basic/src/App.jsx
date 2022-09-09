import {Article, TextInput, Counter, ToggleButton} from './features/index';
import './App.css';

function App() {
  return (
    <div>
      <Article
        title={'RedVelvet'}
        content={'Irene Seulgi'}
      />
      <Article
        title={'Twice'}
        content={'Sana Mina'}
      />
      <TextInput />
      <Counter />
      <ToggleButton />
    </div>
  );
}

export default App;
