import DisplayButton from './components/DisplayButtons'
import TodoList from './components/TodoList';
import { WelcomeUser, WelcomeUserByClass } from './components/WelcomUser';

function App() {

  const buttonsText = ["text1", "text2", "text3", "text4", "text5"];

  return (
    <div className="wrapper">

      <WelcomeUser fio={{name: "Alex", surname: "Skliarov"}}/>

      <WelcomeUserByClass fio={{name: "Alex", surname: "Skliarov"}}/>

      <DisplayButton buttonsText={buttonsText}/>

      <TodoList />
    </div>
  );
}

export default App;
