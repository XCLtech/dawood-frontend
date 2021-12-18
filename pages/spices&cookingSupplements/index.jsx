import React from 'react';
// import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import Product from '~/components/elements/products/DemoProduct';
import data from '@@/public/static/data/demo.json';

const index = () => {
    return (
        <PageContainer title="Shop">
            <div className="ps-page--shop">
                {/* <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" /> */}
                <div className="ps-container">
                    {/* <ShopBanner /> */}
                    {/* <ShopBrands /> */}
                    {/* <ShopCategories /> */}
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right  ">
                            <div className="d-flex justify-content-center row">
                                {data.spices.map((item, index) => (
                                    <Product
                                        key={index}
                                        image={item.url}
                                        title={item.title}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newletters />
        </PageContainer>
    );
};

export default index;
