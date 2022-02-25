import React from 'react';
import Slider from 'react-slick';
import {
    carouselFullwidth,
    carouselStandard,
} from '~/utilities/carousel-helpers';
import Product from '~/components/elements/products/Product';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
export const ProductGroupWithCarousel = ({ products, type = 'normal' }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/product/id/5`
                );
                // console.log(data.data.data);
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
    }, []);
    if (type === 'fullwidth') {
        return (
            <Slider
                {...carouselFullwidth}
                infinite={data.length > 7 ? true : false}
                className="ps-carousel outside">
                {data.map((item, index) => (
                    <div className="ps-carousel-item" key={index}>
                        <Product
                            title={item.title}
                            price={item.price}
                            img={item.imgUrl}
                        />
                    </div>
                ))}
            </Slider>
        );
    } else {
        return (
            <Slider
                {...carouselStandard}
                infinite={data.length > 5 ? true : false}
                className="ps-carousel outside">
                {data.map((item, index) => (
                    <div className="ps-carousel-item" key={index}>
                        <Product
                            title={item.title}
                            price={item.price}
                            img={item.imgUrl}
                        />
                    </div>
                ))}
            </Slider>
        );
    }
};
