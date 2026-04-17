import styled from "styled-components";


export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: auto;
	position: relative;
	overflow: hidden;
`

export const MainTitle = styled.h1`
    font-size: 48px;
    color: white;
    font-weight: 600;

`

export const TextOverlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	color: white;
	padding: 20px;
	border-radius: 10px;
	text-align: center;
	margin-bottom: 13rem;
	width: 70%;
	z-index: 2;
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 0;
`;

export const MainImage = styled.img`
	width: 1440px;
	height: 390px;
	object-fit: cover;
`;