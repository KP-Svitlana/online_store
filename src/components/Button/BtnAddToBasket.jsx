import {SlBasket} from 'react-icons/Sl';

import {BtnAddToBasketSt} from "./Button.styled.js";


export const BtnAddToBasket = ({text}) => <BtnAddToBasketSt type="submit"><SlBasket
    style={{marginRight: '8px', width: '16px'}}/>{text}</BtnAddToBasketSt>

