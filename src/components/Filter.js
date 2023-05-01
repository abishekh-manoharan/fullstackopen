import React from 'react';

function Filter({filteredPersons, handlerFilterNameChange}) {
    return (
        <div>
            <h2>Filtered Numbers</h2>
            filter: <input onChange={handlerFilterNameChange} />
            {
                filteredPersons.map((e) => <div key={e.name}>{e.name} - {e.number}</div>)
            }
        </div>
    );
}

export default Filter;