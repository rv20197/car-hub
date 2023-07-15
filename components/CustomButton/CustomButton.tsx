"use client"
import React, { MouseEventHandler } from 'react';
import Image from 'next/image'

type CustomButtonProps = {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title,containerStyles,handleClick}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1`}>
				{title}
			</span>
		</button>
	)
}

export default CustomButton