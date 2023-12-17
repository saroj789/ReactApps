import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { toast } from 'react-toastify';


const Repos = ( {repos_url} ) => {

    const [repos, setRepos] = useState([]);

    const fetchRepo = async () => {
        try {
            const {data} = await Axios.get(repos_url);
            setRepos(data)
            console.log("repos ",repos);
        } catch (error) {
            toast("Not able to locate repo", {type:"error"})
        }
        
    }

    useEffect( () => {
        fetchRepo()
    }, [repos_url])

   
    return (
        <ListGroup>
            {repos.length ? (
                repos.map( (repo) => (
                    <ListGroupItem key={repo.id}>
                        <div className='text-primary'>
                            <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-decoration-none" > {repo.name} </a>
                        </div>
                        <div className='text-secondary'>{repo.language}</div>
                        <div className='text-info'>{repo.description}</div>

                    </ListGroupItem>
                ))
            ) : (
                <h3>No public reposatry to show here</h3>
            )}

        </ListGroup>
    )
       
}

export default Repos;