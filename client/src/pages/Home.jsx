import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import { axiosInstance } from '../api/apiConfig';

export default function Home() {
    const { user, accessToken } = useAuth();
    const getUser = useUser()
    const [balance, setBalance] = useState(null)
    const fetchBalance = async () => {
        try {
            const { data } = await axiosInstance.get('auth/balance', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            setBalance(data.balance)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
        fetchBalance()
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? `List user Ethereum balance ${balance ? Number(balance) + ' ETH' : 'Loading...'}` : 'Please login first'}
                    </div>
                </div>
            </h2>
        </div>
    )
}
