import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (newCurrency) => {
        dispatch({type:'CHG_CURRENCY', payload: newCurrency});
    }

    return(
        <div className='currency-container alert alert-secondary'>
            <label htmlFor='currency-dropdown' className='currency-label'>Currency</label>
            <select 
                id='currency-dropdown' 
                value={currency} 
                onChange={(e) => handleCurrencyChange(e.target.value)}
                className='currency-dropdown'
            >
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;