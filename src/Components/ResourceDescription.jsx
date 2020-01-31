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
            <div className='resource-info'>
                <div className="resource-info-1">
                    <h2>Program ID</h2>
                    <p>{center && center.program_lst_id}</p>
                    <h2>Contact</h2>
                    <p>{center && center.prog_contact_last_name} {center && center.prog_contact_first_name}</p>
                    <p>{center && center.prog_contact_phone_no}</p>
                </div>
                <div className="resource-info-2">
                    <div className='address'>
                        <h2>Address</h2>
                        <p>{center && center.program_address_1}</p>
                        <p>{center && center.program_address_2}</p>
                        <p>{center && center.program_city}</p>
                        <p>{center && center.program_zip}</p>
                    </div>
                    <div className="nta">
                        <h2>NTA</h2>
                        <p>{center && center.nta}</p>
                    </div>
                </div>
            </div>
        )
    
}




export default ResourceDescription