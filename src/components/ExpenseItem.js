import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    // action
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    // action
    const increaseAllocation = (name, cost) => {
        const expense = {
            name: name,
            cost: cost
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <FcPlus size='2.5em' onClick={event => increaseAllocation(props.name, 10)}></FcPlus>
                </td>
            <td>
                <FaMinusCircle size='2.5em' onClick={event => increaseAllocation(props.name, -10)} style={{ color: 'red'}}></FaMinusCircle>
                </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );

};

export default ExpenseItem;