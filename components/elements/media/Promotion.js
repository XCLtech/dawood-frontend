import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';

const Promotion = ({ link, image }) => {
    if (image) {
        return (
            <Link href={link}>
                <a className="ps-collection">
                    <img src={`${baseUrl}${image.url}`} alt="dawood-online" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/grocery/riceFlour&other">
                <a className="ps-collection">
                    <img
                        src="/static/img/onlineGrocery.png"
                        alt="dawood-online"
                    />
                </a>
            </Link>
        );
    }
};

export default Promotion;
