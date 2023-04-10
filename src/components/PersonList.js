import { useState } from "react";
import { Person } from "./Person";
import '../style.css';

export function PersonList(){

    const [personList, setPersonList] = useState([{name: 'Angela', age: 22}, {name: 'Vanessa', age: 12}]);
    
    const deleteList = (index) => {
        const updatedNames = [...personList];
        updatedNames.splice(index, 1);
        setPersonList(updatedNames);
    };

    return(
        <>
        <button onClick={()=>setPersonList(prevList => [...prevList, {name: 'Kassandra', age: 23}, {name: 'Amira', age: 25}])}>Add new Person</button>
        <table>
            <tr>
                <th>Details</th>
                <th>Delete</th>
            </tr>

            {personList.map(( person, index) => (
            <tr key={index}>
                <th><Person name={person.name} age={person.age}/></th>
                <th><button onClick={()=>deleteList(index)}>Delete</button></th>
            </tr>
            ))}  

        </table>
        </>
    );
}