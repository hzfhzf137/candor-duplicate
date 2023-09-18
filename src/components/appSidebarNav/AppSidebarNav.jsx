import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const AppSidebarNav = ({items}) => {
    const location = useLocation();
    const navLink = (name, icon, badge) => {
        return (
            <>
                {icon && icon}
                {name && name}
                {badge && (
                    <CBadge color={badge.color} className="ms-auto w-12">
                        {badge.text}
                    </CBadge>
                )}
            </>
        );
    };
    const navItem = (item, index) => {
        const {component, name, badge, icon, ...rest} = item;
        const Component = component;
        return (
            <Component
                {...(rest.to &&
                    !rest.items && {
                        component: NavLink,
                    })}
                key={index}
                {...rest}
            >
                {navLink(name, icon, badge)}
            </Component>
        );
    };
    return (
        <React.Fragment>
            <div className="scroll-navbar ">
                {items && items.map((item, index) => navItem(item, index))}
            </div>
        </React.Fragment>
    );
};

export default AppSidebarNav;
