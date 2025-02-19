import React,{useState} from 'react';
import Image from 'next/image';

interface IconButtonProps {
  onClick?: () => void;
  className?: string;
  iconWidth?: number;
  btnWidth?: number;
  btnHeight?: number;
  padding?: number;
  image: string;
  btnTitle: string;
  btnRadius?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick = () => {}, className = '', iconWidth, btnWidth,btnHeight,padding, image,btnTitle,btnRadius }) => {
    return (
        <button onClick={()=>{onClick}}
            style={{ width: `${btnWidth}vw`, height: `${btnHeight}vw`, padding: `${padding}vw`, borderRadius: `${btnRadius}vw` }}
            className={`bg-transparent mr-0 pr-0 border-orangeChosen border-[1px] border-solid  flex justify-end items-center rounded-full text-orangeChosen ${className}`}> 
            <p className='text-center  pr-[.625vw]  font-poppins'>{btnTitle}</p>
            <Image alt='iconImage' src={image} style={{width:`${iconWidth}vw`}}/>
        </button>
    );
};


interface TitleButtonProps {
  onClick?: () => void;
  className?: string;
  btnTitle: string;
  btnWidth: number;
  btnHeight: number;
  btnRadius: number;
  className2?: string;
}

  
  export const TitleButton:React.FC<TitleButtonProps> = ({ onClick={}, className = '', btnTitle, btnWidth, btnHeight,btnRadius, className2='' }) => {
    return (
        <button
        onClick={()=>{onClick}}
        className={`group bg-orangeChosen dark:bg-orangeChosen  text-white  ${className}`}
        style={{
          width: `${btnWidth}vw`,
          height: `${btnHeight}vw`,
          borderRadius: `${btnRadius}vw`
        }}
      >
        <span className={`text-smallText text-center font-poppins ${className2}`} >
          {btnTitle}
        </span>
      </button>
    );
  };


