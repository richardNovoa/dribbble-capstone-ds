import React from 'react';

import ShuddleWorld from '../assets/logos/shuddle-world__light.svg';
import ShuddleVisit from '../assets/logos/shuddle-visit__light.png';
import ShuddleRide from '../assets/logos/shuddle-ride__light.png';
import IptsLight from '../assets/logos/ipts__light.png';

const Logo = (props) => {
	function getLogo(brand) {
		const logoSrc = {
			world: ShuddleWorld,
			visit: ShuddleVisit,
			ride: ShuddleRide,
			ipts: IptsLight
		};
		return logoSrc[brand];
	}
	const logoImg = getLogo(props.brand);

	return <img src={logoImg} className='h-12' />;
};

export default Logo;
