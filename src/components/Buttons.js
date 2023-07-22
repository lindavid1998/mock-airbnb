import styled from 'styled-components';

export const BorderedButton = styled.button`
	background: none;
	border: 1px solid var(--gray-border);
	&:hover {
		cursor: pointer;
	}
`;

export const SearchBarButton = styled(BorderedButton)`
	font-weight: 500;
	border-radius: 40px;
	padding: 15px 30px;
	width: 300px;
	box-shadow: 0px 2px 4px var(--gray-border);
	transition: 0.5s all;
	text-align: left;
	&:hover {
		box-shadow: 0px 2px 4px var(--dark-gray-border);
	}
`;

export const UserAuthDropdownButton = styled(BorderedButton)`
	display: flex;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	gap: 12px;
	padding: 8px;
`;