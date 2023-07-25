import { useState, useEffect } from 'react';
import { ProductItem } from "../ProductItem/index.js";
import { Container } from "../Container/index.js";
import {ProductsListSt, ProductsSectionSt, ProductsTitleSt, ProductsWrapperSt} from "./ProductsList.styled.js";
import { Button } from "../Button/index.js";

const getNumberOfProductsToDisplay = (windowWidth) => {
    if (windowWidth <= 1440) {
        return 2;
    } else {
        return 4;
    }
};

export const ProductsList = ({ products }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [productsToDisplay, setProductsToDisplay] = useState(getNumberOfProductsToDisplay(windowWidth));
    const [productsRender, setProductsRender] = useState([]);


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
        products.slice(0, productsToDisplay);
    }, [windowWidth]);

    const handleLoadMore = () => {
        setProductsRender(products);
    };

    console.log(productsToDisplay, productsRender)
    console.log(products.slice(0, productsToDisplay))

    return (
        <ProductsSectionSt>
            <Container>
                <ProductsTitleSt>Новинки</ProductsTitleSt>
                <ProductsWrapperSt>
                    <ProductsListSt>
                        { products?.map(item => (
                            <ProductItem key={item.id} item={item} />
                        ))}
                    </ProductsListSt>
                    {products.length > productsToDisplay && (
                        <Button text='Переглянути всі' handleLoadMore={handleLoadMore} />
                    )}
                </ProductsWrapperSt>
            </Container>
        </ProductsSectionSt>
    );
};
