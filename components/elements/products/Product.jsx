import React from 'react';
import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import useProduct from '~/hooks/useProduct';
// import Rating from '~/components/elements/Rating';

const Product = ({ product, title, price, img }) => {
    // const { thumbnailImage, price, badge, title } = useProduct();
    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                {/* <Link href="/product/[pid]" as={`/product/${product.id}`}> */}
                {/* <a>{thumbnailImage(product)}</a> */}
                <img src={img} alt="product" height={150} />
                {/* </Link> */}
                {/* {badge(product)} */}
                <ModuleProductActions product={product} />
            </div>
            <div className="ps-product__container">
                {/* <Link href="/shop">
                    <a className="ps-product__vendor">Young Shop</a>
                </Link> */}
                <div className="ps-product__content">
                    {/* {title(product)} */}
                    {title}
                    <div className="ps-product__rating">
                        {/* <Rating /> */}
                        {/* <span>02</span> */}
                    </div>
                    {/* {price(product)} */}
                    {price}
                </div>
                {/* <div className="ps-product__content hover"> */}
                {/* {title(product)} */}
                {/* {price(product)} */}
                {/* {title} */}
                {/* {price} */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Product;
