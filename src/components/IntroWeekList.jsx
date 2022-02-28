import { useState } from "react";

    const IntroWeekList = () => {
        const [objectives, setObjectives] = useState([
            { id: 1, objective: "Understand what is meant by a command line interface", completeStatus: false, completedDate: null, notes: "" },
            { id: 2, objective: "Know how to use the command line to navigate between directories", completeStatus: false, completedDate: null, notes: "" },
            { id: 3, objective: "Know why version control is useful in software development", completeStatus: false, completedDate: null, notes: "" },
        ])

    const changeStatus = (id) => {
        setObjectives((currentObjectives) => {
            const newObjectives = currentObjectives.map((item) => {
                const newObjective = { ...item };
                if(newObjective.id === id) {
                    newObjective.completeStatus = !newObjective.completeStatus;
                }
                return newObjective
            })
            return newObjectives;
        })
    }

    return (
        <section>
            <h2>Introduction Week</h2>
            <ul>
                {objectives.map(({ id, objective, completeStatus, completedDate, notes }, index) => {
                    return (
                        <li className="objective-item" key={objective + index}>
                            <input type="checkbox" name={objective} checked={completeStatus} onChange={() => changeStatus(id)} />
                            <label htmlFor={objective}>{objective}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default IntroWeekList;