import EmployeesListItem from '../app-employees-list-item/app-employees-list-item';

import './app-employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> //<EmployeesListItem name={item.name} salary={item.salary}/>
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;