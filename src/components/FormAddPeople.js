import React from 'react';

function FormAddPeople({handleNewNameAdd,
    handleNameChange,
    handleNumberChange}) {
    return (
        <div>
            <form onSubmit={handleNewNameAdd}>
        <div>
          name: <input onChange={handleNameChange} />
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    );
}

export default FormAddPeople;