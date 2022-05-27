import { useState } from "react";
import { PersonWrapper } from "./PersonCard.styles";

type PersonCardProps = {
    firstName: string,
    lastName: string,
    age: number
}

const PersonCard = (props: PersonCardProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState<number | undefined>(undefined);
    return (
        <div>
            <div>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input id="firstName" type="text" value={firstName} onChange={(e) => {
                        setFirstName(e.currentTarget.value);
                    }} /></div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input id="lastName" type="text" value={lastName} onChange={(e) => {
                        setLastName(e.currentTarget.value);
                    }} /></div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input id="age" type="number" value={age} onChange={(e) => {
                        setAge(Number.parseInt(e.currentTarget.value));
                    }} /></div>
            </div>
            <PersonWrapper>
                <p>My name is {lastName} {firstName}, and I have {age} years</p>
            </PersonWrapper>
        </div>
    );
}
export default PersonCard;