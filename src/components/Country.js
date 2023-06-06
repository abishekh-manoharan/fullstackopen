import React, { useState } from 'react';

function Country({country}) {
    const [show, setShow] = useState(false)

    return (
        <div>
            {country.name.common}
            <button onClick={()=>setShow(!show)}>Show</button>
            {show ? 
                <>{country.name.official}</>
            :
                null
            }
        </div>
    );
}

export default Country;