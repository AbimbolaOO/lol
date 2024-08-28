"use client";
import clsx from 'clsx';
import React, { useReducer } from 'react';

import ArrowDownIcon from '../Icons/ArrowDownIcon';

interface IAccordion {
  title: string;
  children: any;
  handleStateChange?: any;
  index?: number;
  isOpen?: boolean;
}

// Type definition
export enum AccordionReducerActionType {
  CLICKED_SECTION = "section-clicked",
}

interface IAccordionReducerActionType {
  type: AccordionReducerActionType;
  payload: any;
}

// Reducers
function accordionReducer(state: any, action: IAccordionReducerActionType) {
  switch (action.type) {
    case AccordionReducerActionType.CLICKED_SECTION:
      if (state.index === action.payload.index) {
        return { index: -1 };
      }
      return { ...action.payload };
    default:
      return state;
  }
}

// Components

export const Accordion: React.FC<Pick<IAccordion, "children">> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(accordionReducer, {
    index: -1,
  });

  const handleStateChange = (index: any) => {
    console.log("mo ti click sha");
    dispatch({
      type: AccordionReducerActionType.CLICKED_SECTION,
      payload: { index },
    });
  };

  return (
    <div className="flex flex-col">
      {React.Children.map(children, (child: any, index) => {
        const isOpen = index === state.index ? true : false;
        return React.cloneElement(child, {
          ...child.props,
          handleStateChange,
          index,
          isOpen,
        });
      })}
    </div>
  );
};

export const AccordionCell: React.FC<IAccordion> = ({
  title,
  children,
  handleStateChange,
  isOpen,
  index,
}) => {
  return (
    <div className="flex flex-col border-b-[1px] border-ft-black text-ft-black">
      {/* Header text */}
      <div
        onClick={() => handleStateChange(index)}
        className="flex cursor-pointer items-center justify-between py-[37px] pr-10"
      >
        <div className="text-[20px] font-medium leading-[35px]">{title}</div>
        <ArrowDownIcon
          className={clsx(
            isOpen ? "rotate-180" : "rotate-0",
            "transition-all duration-300",
          )}
        />
      </div>

      {/* Description text */}
      <div
        className={clsx(
          "origin-top overflow-hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-[500px] pb-[37px] opacity-100"
            : "max-h-0 pb-0 opacity-0",
        )}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};
