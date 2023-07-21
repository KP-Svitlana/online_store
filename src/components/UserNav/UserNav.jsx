import {
    UserNavWrap,
} from './UserNav.styled';

import { Images } from './Images/Images';


export const UserNav = () => {
    const nav = [
        {
            url: '/account',
            icon: Images.user,
            description: 'Аккаунт'
        },
        {
            url: '/favorite',
            icon: Images.favorite,
            description: 'Вибране'
        },
        {
            url: '/cart',
            icon: Images.cart,
            description: 'Кошик'
        },
    ];

    const userNav = nav.map(({url, icon, description}, id) => {
        return (
            <li key={id}>
                <a href={url}>
                    <img src={icon} alt={description} />
                </a>    
                {description}
        </li>
        )
    })

    return (
        <UserNavWrap>
            <ul>
                {userNav}
            </ul>
        </UserNavWrap>
    )
}