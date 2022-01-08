import React from 'react';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
import data from '@@/public/static/data/demo.json';
import { CartProvider } from 'react-use-cart';


const index = () => {
    return (
        <CartProvider>
        <PageContainer title="Shop">
            <div className="ps-page--shop">
                <div className="ps-container">
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            {/* <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange /> */}
                        </div>
                        <div className="ps-layout__right">
                            <div className="d-flex justify-content-center row">
                                {data.Jams.map((item, index) => (
                                    <Product
                                        key={index}
                                        image={item.url}
                                        title={item.title}
                                        price={item.price}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newletters />
        </PageContainer>
        </CartProvider>
    );
};

export default index;
