import { useState } from "react"
import { StickyForm } from "./StickyForm"


export const StickynotePage = () => {
    

    const[isCreate, setIsCreate] = useState(false)

    const handleCreate = () =>  {
        setIsCreate(true)
     }


  return (
    <div>
        
       <button className="btncreate" onClick={handleCreate}>+</button>

            {
                 isCreate && (

                  <div>
                      
                 <StickyForm/>
                 </div>
                 )
            }         

    </div>
  )
}
