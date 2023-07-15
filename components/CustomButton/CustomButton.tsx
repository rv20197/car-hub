'use client';
import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import Image from 'next/image';

type CustomButtonProps = {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: 'button' | 'submit' | 'reset';
};

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
	btnType
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}>
			<span className={`flex-1`}>{title}</span>
		</button>
	);
};

export default CustomButton;
