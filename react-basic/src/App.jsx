import {Article, TextInput, Counter, ToggleButton} from './features/index';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  /*-- use API --*/
  const [id, setId] = useState('acaiyudai');
  const [name, setName] = useState('');
  const ids = ['acaiyudai', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setName(data.name);
    })
    .catch(error => {
      console.error(error);
    });
  }, [id]);



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
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
