import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'



function ResourceDescription(props) {
    let id = useParams().program_id

    useEffect(() => {
        props.onResourceLoad(id)
        
    }, [])


    function findCenter(id) {
        return(
            props.results.filter((result) => {
                return result.program_lst_id == id
            })
        )
    }
    
    console.log(props);
    console.log(findCenter(useParams().program_id));
    // let center = findCenter(id) && findCenter(id)[0];
    let center = props.descResults && props.descResults[0]
    console.log(center)
        return(
            <div>
                <h2>Program ID</h2>
                <p>{center && center.program_lst_id}</p>
                <h2>Contact</h2>
                <p>{center && center.prog_contact_last_name} {center && center.prog_contact_first_name}</p>
                <p>{center && center.prog_contact_phone_no}</p>
                <h2>Address</h2>
                <p>{center && center.program_address_1}</p>
                <p>{center && center.program_address_2}</p>
                <p>{center && center.program_city}</p>
                <p>{center && center.program_zip}</p>
                <h2>NTA</h2>
                <p>{center && center.nta}</p>
            </div>
        )
    
}




export default ResourceDescription