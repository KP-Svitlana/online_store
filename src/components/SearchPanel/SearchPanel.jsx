import {
    SearchPanelWrap
} from './SearchPanel.styled';

import { Images } from './Images/Images';
import { useState } from 'react';

export const SearchPanel = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <SearchPanelWrap>
            <img src={Images.search} alt="" />
            <input 
                type="text" 
                placeholder='Пошук'
                value={value} 
                onChange={handleChange} />
        </SearchPanelWrap>
    )
}