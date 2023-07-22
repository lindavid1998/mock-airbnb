import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserAuthDropdown from './UserAuthDropdown';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--gray-border);
	padding: 17px var(--left-right-padding);
`;

const Navbar = () => {
	return (
		<StyledNav>
			<Logo />
			<SearchBar />
			<UserAuthDropdown />
		</StyledNav>
	);
};

export default Navbar;
