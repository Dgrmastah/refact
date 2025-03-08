import React from "react";

const EmployeeList =({employees}) => {
    return (
        <div className="employees">
            <h2>Empleados</h2>
            <ul className="lista">
                {employees.map((employee, index)=> (
                    <li key ={index}>
                        <h3>{employee.name}</h3>
                        <p>{employee.age}</p>
                        <p>Hobbie: {employee.hobbies.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;