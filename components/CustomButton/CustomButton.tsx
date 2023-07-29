'use client';
import React, { MouseEventHandler } from 'react';
import Image from 'next/image';

type CustomButtonProps = {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: 'button' | 'submit' | 'reset';
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
};

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType,
	textStyles,
	rightIcon}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className='relative w-6 h-6'>
					<Image
						src={rightIcon}
						alt='right-icon'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='object-contain'
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
