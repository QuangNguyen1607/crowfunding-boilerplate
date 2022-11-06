import { defaultImage } from "constants/global";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ImageRatioStyled = styled.div`
	a {
		position: relative;
		height: 0;
		overflow: hidden;
		display: block;
		padding-top: calc(
			(${props => props.height} / ${props => props.width}) * 100%
		);
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			object-fit: cover;
			transition: 0.3s ease-in-out all;
		}
	}
`;
const ImageRatio = ({ className = "", url = defaultImage, width = 0, height = 0 }) => {
	return (
		<ImageRatioStyled
			className={`${className}`}
			width={width}
			height={height}>
			<Link to='/'>
				<img src={url} alt="" />
			</Link>
		</ImageRatioStyled>
	);
};

export default ImageRatio;
