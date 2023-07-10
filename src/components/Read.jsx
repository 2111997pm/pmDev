import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


const Read = () => {
    const [newdata, setNewData] = useState()
    const navigate = useNavigate()



    const fetchData = async () => {
        const { data } = await axios.get('https://63dba5e5b8e69785e4875188.mockapi.io/prahalad')
        console.log(data);
        setNewData(data)

    }

    useEffect(() => {
        fetchData();

    }, [])

    const handleDelet = async (id) => {
        const deletData = await axios.delete(`https://63dba5e5b8e69785e4875188.mockapi.io/prahalad/${id}`)
        await fetchData();
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <>
            <table border={1} width={'80%'}>
                


                {newdata?.map((user) => (
                    <tbody key={user.id}>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => navigate(`/update/${user.id}`)}>Edit</button>
                            </td>
                            <td><button onClick={() => handleDelet(user.id)}>Delet</button></td>
                        </tr>

                    </tbody>
                ))}
                
            </table>
        </>
    )
}

export default Read