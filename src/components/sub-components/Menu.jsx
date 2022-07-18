import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguaje } from '../../redux/actions/index.js';
import './Menu.scss';

export default function Menu() {
    const language = useSelector((state)=>state.language)
    const dispatch = useDispatch();

  
    const handleChange = (event) => {
        dispatch(changeLanguaje(event.target.value));
    };

    return (
        <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
            id="demo-simple-select-standard"
            displayEmpty
            value={language}
            onChange={handleChange}
            >
            <MenuItem value="ES">Español</MenuItem>
            <MenuItem value="EN">English</MenuItem>
            </Select>
        </FormControl>
        </div>
    );
}
