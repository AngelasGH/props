
/**
 * Task 3 : Combining Props and State
 */

/** created Person Component function that takes an object
 *  with two properties to make the 
 *  code more readable
 * */ 

 export function Person({name, age}){

    return(
            <p><strong>Name:</strong> {name}  <strong>Age:</strong> {age}</p>
    );
 }