import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const NewUpdate = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate()


    const [myData, setMyData] = useState({})


    const fetchData = async () => {
        const { data } = await axios.get(`https://63dba5e5b8e69785e4875188.mockapi.io/prahalad/${id}`)

        setMyData(data)

    }

    useEffect(() => {
        fetchData();
    }, [])


    const update = async (event) => {
        event.preventDefault();

        const updateData = await axios.put(`https://63dba5e5b8e69785e4875188.mockapi.io/prahalad/${id}`, myData)
        if (updateData) {
            navigate('/read')
        }
    }
    useEffect(() => {
        update();
    }, [])


    return (
        <>
            <form onSubmit={update}>
                <input type="text" value={myData.name} onChange={e => setMyData({ ...myData, name: e.target.value })} />
                <input type="text" value={myData.email} onChange={e => setMyData({ ...myData, email: e.target.value })} />
                <button>Submit</button>
            </form>

        </>
    )
}

export default NewUpdate;