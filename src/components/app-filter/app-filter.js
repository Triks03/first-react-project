

import './app-filter.css'

const AppFilter = (props) =>  {
    const btnData = [
        {name: 'all', title: 'All employees'},
        {name: 'rise', title: 'Rise'},
        {name: 'moreThen1000', title: 'More then 1000$'},
    ]

    const btn = btnData.map(({name, title}) => {
        const activeClass = props.filter === name;
        const classes = activeClass ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${classes}`}
                    type="button"
                    key = {name}
                    onClick={() => props.onFilterClick(name)}>
                {title}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btn}
        </div>
    );
}

export default AppFilter;