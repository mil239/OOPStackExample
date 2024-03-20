import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CreateAuction()
{
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [response, setresponse] = useState('');

    const handleAuctionSubmit = async (e) => 
    {
        e.preventDefault();

        try
        {
            const response = await axios.post('https://localhost:3000/auctions', {
            itemName, description, endDateTime
        });
        setresponse(result.data);
        if(result.data.success)
        {
            alert('Your action was created successfully, Auction ID: ${result.data.AuctionId}')
        }
        else
        {

        }
    }
        catch(error)
        {
            console.error('Error saving Autcion:', error);
            setErrorMessage('An error occurred while saving the action ')
        }
        
    }
}

export default CreateAuction;