import {
    SearchPanelWrap,
    SearchPanelInput
} from './SearchPanel.styled';

import search from '../../assets/svg/search.svg';
import { useState } from 'react';

export const SearchPanel = () => {
    const [value, setValue] = useState('');
    const [state, setState] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
        setState(!state)
    }

    return (
        <SearchPanelWrap>
            <img src={search} alt="search" />
            <SearchPanelInput 
                type="text" 
                placeholder='Пошук'
                value={value} 
                onChange={handleChange} />
        </SearchPanelWrap>
    )
}