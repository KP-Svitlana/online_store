import {
    ProductItemSt,
    OldProductPriceSt,
    ProductImgSt,
    ProductTitleSt,
    ProductPriceSt,
    SpanPriceSt, BtnBoxSt, ItemBoxSt
} from './ProductItem.styled.js';
import productImg from '../../img/product_img.png'
import {BtnAddToBasket} from "../Button/BtnAddToBasket.jsx";
import {ColorList} from "../ColorSquare/index.js";

export const ProductItem = ({item}) => {
    const {acticle, color, discount, photoUrl, priceUan, id, product} = item;
    const arrColors = [color];
    const discountPercent = Math.floor((discount / 10) % 10);
    const newPrise = Number((priceUan - (priceUan * discountPercent) / 100).toFixed(2));

    return (
        <>
            {acticle &&
                <ProductItemSt key={id}>
                    {photoUrl
                        ? <ProductImgSt
                            src={photoUrl}
                            alt={product}
                        />
                        : <ProductImgSt
                            src={productImg}
                            alt={product || 'Product'}
                        />}

                    <ItemBoxSt>
                        <ProductTitleSt>{product}</ProductTitleSt>
                        <ColorList colors={arrColors}/>
                        {newPrise
                            ? <>
                                <ProductPriceSt>{newPrise} грн</ProductPriceSt>
                                <OldProductPriceSt>{priceUan} грн</OldProductPriceSt>
                            </>
                            : <ProductPriceSt>{priceUan} <SpanPriceSt>грн</SpanPriceSt></ProductPriceSt>}
                        <BtnBoxSt>
                            <BtnAddToBasket text='До кошика'/>
                        </BtnBoxSt>
                    </ItemBoxSt>
                </ProductItemSt>
            }
        </>
    );
};

