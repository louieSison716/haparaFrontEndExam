import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {SelectOpener, OptionList, OptionListTitle} from '../../modules/header/HeaderElements';
import Logo from '../../../icons/icon-arrow.svg';

interface Option {
  id: number;  
  title: string;
}

interface ChildComponentProps  {
    options?: Option[];
    isSelectOpen?: boolean;
    selectedOption: (url:string) => void;
}

export const Select: React.FC<ChildComponentProps>  = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    
    const onClickEvent = (event: React.MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;
      let dataTitle = target.getAttribute("data-title");
 
      setSelectedOption(dataTitle)
      props.selectedOption(dataTitle)
    };

    return (
      <SelectOpener onClick={()=>setIsOpen(!isOpen)}>
        <OptionListTitle>
          {selectedOption || "teacher@school.org"}
          {!isOpen && <i className="fa fa-angle-down" aria-hidden="true"></i>}
          {isOpen && <i className="fa fa-angle-up" aria-hidden="true"></i>}
          
        </OptionListTitle>
        {isOpen && <OptionList>
        {props.options.map((option) => <li key={option.id} data-title={option.title} onClick={onClickEvent} >
          <span>{option.title}</span></li>)}
        </OptionList>}
      </SelectOpener>
    );
};