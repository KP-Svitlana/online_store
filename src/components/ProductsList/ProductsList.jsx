import {useState, useEffect} from 'react';

import {ProductItem} from "../ProductItem/index.js";
import {ProductsListSt, ProductsSectionSt, ProductsTitleSt, ProductsWrapperSt} from "./ProductsList.styled.js";
import {Button} from "../Button/index.js";

const getNumberOfProductsToDisplay = (windowWidth) => {
    if (windowWidth <= 1440) {
        return 5;
    } else {
        return 8;
    }
};

export const ProductsList = ({products}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [productsToDisplay, setProductsToDisplay] = useState(getNumberOfProductsToDisplay(windowWidth));
    const [productsRender, setProductsRender] = useState([]);

    const getArrProducts = () => {
        const myProducts = products.slice(0, productsToDisplay);
        setProductsRender(myProducts);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setProductsToDisplay(getNumberOfProductsToDisplay(windowWidth));
    }, [windowWidth]);

    useEffect(() => {
        getArrProducts();
    }, [productsToDisplay, products]);

    const handleLoadMore = () => {
        setProductsRender(products);
    };

    return (
        <ProductsSectionSt>
            <ProductsTitleSt>Новинки</ProductsTitleSt>
            <ProductsWrapperSt>
                <ProductsListSt>
                    {productsRender.map(item => (
                        <ProductItem key={item.id} item={item}/>
                    ))}
                </ProductsListSt>
                {productsRender.length !== products.length && (
                    <Button text='Переглянути всі' handleLoadMore={handleLoadMore}/>
                )}
            </ProductsWrapperSt>
        </ProductsSectionSt>
    );
};
