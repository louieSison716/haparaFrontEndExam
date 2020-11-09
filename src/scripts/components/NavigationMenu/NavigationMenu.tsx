import React, { MouseEvent, useState } from "react";
import { NavigationHolder, NavigationHolderList} from '../../modules/header/HeaderElements';

interface Option {
    id: number;
    title: string; 
}

interface ChildComponentProps  {
    options?: Option[];
    isSelected: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    selected: boolean;
    isMobileOpen: boolean;
}

export const NavigationMenu: React.FC<ChildComponentProps>  = (props) => {
    
    const [selectedList, setSelectedList] = useState<number | null>(0);
   
    const onClickEvent = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        let dataIndex = target.getAttribute("data-index");
        let dataIndexNumber = parseInt(dataIndex);
        setSelectedList(dataIndexNumber)
    };

    return (
      <NavigationHolder className={props.isMobileOpen === true ? 'navbar-mobile-open' : ''}>
          <img src="./icons/logo.svg"/>
        <NavigationHolderList>
            {props.options.map((option) => 
                <li key={option.id} 
                    onClick={onClickEvent}
                 >
                    <a href="#" data-category="Navigation" data-action="Navigation Link"
                    data-name={option.title} data-index={option.id}
                    className={selectedList === option.id ? 'Selected' : ''}
                    >{option.title}</a></li>
            )}
        </NavigationHolderList>
      </NavigationHolder>
    );
};