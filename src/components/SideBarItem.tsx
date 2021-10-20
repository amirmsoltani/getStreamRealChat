import React from 'react';
import {IconType} from 'react-icons';

export type SideBarItemPropType = { Icon: IconType, containerClassName?: string }
const SideBarItem: React.FC<SideBarItemPropType> = ({Icon, containerClassName}) => {
    return (
        <div className={containerClassName}>
            <div className="icon1__inner">
                <Icon  width={30}/>
            </div>
        </div>
    );
};

export default SideBarItem;
