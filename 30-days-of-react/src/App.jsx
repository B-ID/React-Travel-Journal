import Header from './components/Header'
import Props from './components/Props'
import State from './components/State'
import State2 from './components/State2'
import ConditionalRendering from './components/ConditionalRendering'
import Events from './components/Events'
import Forms from './components/Forms'
import Forms2 from './components/Forms2'

function App() {
  const data = {
    welcome: 'Welcome to 30 Days or React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Bukola',
      lastName: 'Idowu'
    },
    date: 'Oct 7, 2020'
  }
  return (
    <div className="app">
      <Header />
      <Props data={data} />
      <State />
      <State2 />
      <ConditionalRendering data={data}/>
      <Events />
      <hr />
      <hr />
      <Forms />
      <hr />
      <Forms2 />
    </div>
  );
}

export default App;
