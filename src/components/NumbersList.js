import React from 'react';

function NumbersList({persons}) {
    return (
        <div>
            <h2>Numbers</h2>
            {
                persons.map((e) => <div key={e.name}>{e.name} - {e.number}</div>)
            }
        </div>
    );
}

export default NumbersList;