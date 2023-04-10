import { Greeting } from "./components/Greeting";
import { Counter } from "./components/Counter";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  return (
    <>
    {/**Task 1 */}
    <h2>Greeting Component </h2>
      <Greeting name="John"/>
      <Greeting name="Mary"/>
      <Greeting name="Alex"/>
      <Greeting name="Sarah"/>
    
    {/**Task 2 */}
    <h2>Counter Component </h2>
    <Counter />

    {/**Task 3 */}
    <h2>Person Component </h2>
    <Person name="Rona" age={12} />
    <Person name="Mariposa" age={19} />
    
    {/**Task 3 Cont... */}
    <h2>Person List Component </h2>
    <PersonList />
    </>
  );
}

export default App;
