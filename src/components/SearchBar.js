import React from 'react';
import styled from 'styled-components';
import { SearchBarButton } from './Buttons';

const CenteredContainer = styled.div`
	display: flex;
	align-items: center;
`;

const StyledSearchIcon = styled.div`
	border-radius: 50%;
	background-color: var(--main-red);
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
  position: relative;
  left: -40px;
`;

const SearchIcon = () => {
	return (
		<StyledSearchIcon>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 32 32'
				aria-hidden='true'
				role='presentation'
				focusable='false'
				style={{
					display: 'block',
					fill: 'none',
					height: 12,
					width: 12,
					stroke: '#ffffff',
					strokeWidth: 5.33333,
					overflow: 'visible',
				}}
			>
				<path
					fill='none'
					d='M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9'
				/>
			</svg>
		</StyledSearchIcon>
	);
};

const SearchBar = () => {
	return (
		<CenteredContainer>
			<SearchBarButton>Start your search</SearchBarButton>
			<SearchIcon />
		</CenteredContainer>
	);
};

export default SearchBar;
