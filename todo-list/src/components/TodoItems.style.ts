import styled from "styled-components";

export const TodoItem = styled.div<{ isChecked: boolean }>`

font-size:large;
display:flex;
width: 200px;
justify-content: space-between;
margin:15px;
font-family:cursive;
padding: 15px;
background-color: lightyellow;
border: 1px black solid;
justify-items: center;
border-radius: 10px;
box-shadow:2px 2px 2px 2px gray;
.todo-text{
    text-decoration:  ${props => props.isChecked ? 'line-through' : 'none'};
}

`