import React from 'react';
import * as S from "./styles";

interface ServiceCardProps {
	svg: React.ReactElement;
	title: string;
	titleColor?: string;
	background?: string;
	bold?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ svg, title, titleColor, bold, background }) => (
	<S.CardWrapper>
		<S.Card $background={background}>
			<S.CardImageContainer>{svg}</S.CardImageContainer>
		</S.Card>

		<S.CardLabel $color={titleColor} $bold={bold}>{title}</S.CardLabel>
	</S.CardWrapper>
);

export default ServiceCard;

