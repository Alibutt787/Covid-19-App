import React, { createContext,useState } from 'react'



export const contx=createContext('');
export const Maatch = (  {children } ) => {
      const [stat, setstate] = useState(contx);
function fetc(data){
   setstate(data);
    
}
    return (
        <div>
            <contx.Provider value={{stat, fetc}}>  {children }</contx.Provider>
        </div>
    )
}
