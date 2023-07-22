import React from 'react'
import UserIcon from './UserIcon'
import { UserAuthDropdownButton } from './Buttons'

const HamburgerMenu = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		aria-hidden='true'
		role='presentation'
		focusable='false'
		style={{
			display: 'block',
			fill: 'none',
			height: 16,
			width: 16,
			stroke: 'currentcolor',
			strokeWidth: 3,
			overflow: 'visible',
		}}
	>
		<g fill='none'>
			<path d='M2 16h28M2 24h28M2 8h28' />
		</g>
	</svg>
);

const UserAuthDropdown = () => {
  return (
		<UserAuthDropdownButton>
			<HamburgerMenu />
			<UserIcon dimension={'30px'} />
		</UserAuthDropdownButton>
	);
}

export default UserAuthDropdown