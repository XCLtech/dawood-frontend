import React from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle" style={{ color: 'white' }}>
                <i className="icon-menu"></i>
                <span style={{ color: 'white' }}>Grocery</span>
            </div>
            <div className="menu__content" style={{ color: 'black' }}>
                <Menu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
