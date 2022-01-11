import React from 'react';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
// import Rating from '~/components/elements/Rating';
import { useCart } from 'react-use-cart';
import Link from 'next/link';
const DemoProduct = ({ image, title, price, item }) => {
    const { addItem } = useCart();
    return (
        <>
            <div className="row">
                <div className="ps-product ">
                    <div
                        className="ps-product__thumbnail"
                        style={{
                            width: '170px',
                            cursor: 'pointer',
                        }}>
                        <Link href="/product/[pid]" as={`/product/${item.id}`}>
                            <img src={image} alt="image" />
                        </Link>

                        {/* <ModuleProductActions product={product} /> */}
                        <button
                            className="ps-product__actions"
                            style={{
                                padding: '5px 20px',
                                border: 'none',
                                color: 'white',
                                backgroundColor: '#de0000',
                            }}
                            onClick={() => addItem(item)}>
                            Add to cart
                        </button>
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">{title}</a>
                        <div className="ps-product__content">
                            {/* {title} */}
                            {/* <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div> */}
                            Rs. {price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DemoProduct;
