

/**
 * Task 1 : Understanding Props
 * The function exports a React component that displays a name in a list item.
 * @param props - props is an object that contains all the properties passed to the Greeting component.
 * In this case, it is expected to have a property called "name" which will be displayed as a list
 * item.
 */

import React from "react";

export function Greeting(props){
    return(
        <ul>
            <li>{props.name}</li>
        </ul>
    );
}