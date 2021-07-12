import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()

    }, [])


    return (
        <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        <h2>Animals</h2>
            <button onClick={() => {history.push("/animals/create")}}>
                Add Animal
            </button>
        {
            employees.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
            })
        }
        </div>
    )
}


// When the button is clicked, show the employee form by using history.push() to change the route.
// The employee form should include an input for the name and a dropdown for the location.
// On Save, create a new employee object and POST it to the API. The employee object should include the locationId as a foreign key.
// Once the employee is saved, re-route the user to the list of employees.
// Practice: Open New locations
// Write a component whose responsibility is to open a new location. This will follow a similar pattern.