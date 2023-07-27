import {
    UserNavWrap,
    UserNavUl,
    UserNavLi,
    UserNavSpan
} from './UserNav.styled';

import user from '../../assets/svg/user.svg';
import favorite from '../../assets/svg/favorite.svg';
import cart from '../../assets/svg/empty_cart.svg';



export const UserNav = () => {
    const nav = [
        {
            url: '/account',
            icon: user,
            description: 'Аккаунт'
        },
        {
            url: '/favorite',
            icon: favorite,
            description: 'Вибране'
        },
        {
            url: '/cart',
            icon: cart,
            description: 'Кошик'
        },
    ];

    const userNav = nav.map(({url, icon, description}, id) => {
        return (
            <UserNavLi key={id}>
                <a href={url}>
                    <img src={icon} alt={description} />
                </a> 
                <UserNavSpan>
                    {description}
                </UserNavSpan>   
        </UserNavLi>
        )
    })

    return (
        <UserNavWrap>
            <UserNavUl>
                {userNav}
            </UserNavUl>
        </UserNavWrap>
    )
}