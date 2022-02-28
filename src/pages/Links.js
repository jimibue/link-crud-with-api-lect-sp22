import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'

const Links = ()=>{
    //useContext always return object just destructor keys
    
    const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)
    return (
        <div>
        <h1>Links here</h1>
        <div>{JSON.stringify(links)}</div>
        <button onClick={getLinks}>Get Links</button>
        <button onClick={()=>createLink( {title:'title here', username:'jamesy'} )}>create link</button>
        <button onClick={()=>updateLink( {id:19, title:'UPDATED'} )}>update link</button>
        <button onClick={()=>deleteLink(19)}>delete link</button>
        </div>
    )
}

export default Links