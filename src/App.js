import { Greeting } from "./components/Greeting";
import { Counter } from "./components/Counter";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  return (
    <>
    <h1>Greeting Component </h1>
      <Greeting name="John"/>
      <Greeting name="Mary"/>
      <Greeting name="Alex"/>
      <Greeting name="Sarah"/>
    
    <h1>Counter Component </h1>
    <Counter />

    <h1>Person Component </h1>
    <Person name="Rona" age={12} />
    <Person name="Mariposa" age={19} />

    <PersonList />
    </>
  );
}

export default App;
