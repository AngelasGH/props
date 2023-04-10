//  import { useState } from "react";
 
 export function Person(props){
    
    const name = props.name;
    const age = props.age;

    return(
            <p><strong>Name:</strong> {name}  <strong>Age:</strong> {age}</p>
    );
 }