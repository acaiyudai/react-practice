import Article from './features/Article';
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
    </div>
  );
}

export default App;
