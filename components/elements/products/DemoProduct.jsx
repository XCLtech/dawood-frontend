import React from 'react';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import Rating from '~/components/elements/Rating';

const DemoProduct = ({ image, product, title, price }) => {
    // console.log(Product.relatedProduct.image.url);
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
                        {/* <div className="ps-product__content hover">
                                    {item.title}
                                    Rs. {item.price}
                                </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="d-flex col-12">
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                    <img
                            src="https://www.dawoodonline.pk/product/listing/Img-u665.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Rice</a>
                        <div className="ps-product__content">
                            rice
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>

                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-u327.jpeg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">floor</a>
                        <div className="ps-product__content">
                            floor
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            400
                        </div>
                    </div>
                </div>

                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-i97a.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">bajra atta</a>
                        <div className="ps-product__content">
                            bajra
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>

                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/detail_big/Img-o8o1.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Young Shop</a>
                        <div className="ps-product__content">
                            wahab
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex">
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-a1u9.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Besan</a>
                        <div className="ps-product__content">
                            besan
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-1575.png"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Besan</a>
                        <div className="ps-product__content">
                            besan
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-oo4e.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Besan</a>
                        <div className="ps-product__content">
                            besan
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>
                <div className="ps-product">
                    <div className="ps-product__thumbnail">
                        <img
                            src="https://www.dawoodonline.pk/product/listing/Img-e84a.jpg"
                            alt="asd"
                            style={{ width: '200px' }}
                        />
                        <ModuleProductActions product={product} />
                    </div>
                    <div className="ps-product__container">
                        <a className="ps-product__vendor">Besan</a>
                        <div className="ps-product__content">
                            besan
                            <div className="ps-product__rating">
                                <Rating />
                                <span>02</span>
                            </div>
                            300
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default DemoProduct;
