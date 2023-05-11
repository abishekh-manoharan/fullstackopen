import React from 'react';

function NumbersList({persons, handleDeleteClick}) {
    return (
        <div>
            <h2>Numbers</h2>
            {
                persons.map((e) => 
                    <div key={e.name}>
                        {e.name} <br/>
                        {e.number} <br/>
                        <button onClick={()=>handleDeleteClick(e.id)}>delete</button> <br/> <br/>
                    </div>)
            }
        </div>
    );
}

export default NumbersList;