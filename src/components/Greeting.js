
/**
 * Task 1 : Understanding Props
 */

import React from "react";

export function Greeting(props){
    return(
        <ul>
            <li>{props.name}</li>
        </ul>
    );
}