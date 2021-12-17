import React from 'react';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';

const DemoProduct = ({ image, product, title, price }) => {
    return (
        <>
            <div className="row">
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img src={image} alt="asd" />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">{title}</a>
                        <div className="ps-product__content">
                            {title}
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            Rs. {price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DemoProduct;
