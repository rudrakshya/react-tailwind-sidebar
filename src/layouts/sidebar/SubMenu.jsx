import {motion} from 'framer-motion';
import { useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

const SubMenu = ({data}) => {

	const {pathname} = useLocation();
	const [subMenuOpen, setSubMenuOpen] = useState(false);

	return (
		<>
			<ul>
				<li 
					onClick={() => setSubMenuOpen(!subMenuOpen)}
					className={`link ${pathname.includes(data.name) && "text-blue-600" }`}
				>
					<data.icon size={23} className="min-w-max" />
					<span className='capitalize flex-1'>{data.name}</span>
					<IoIosArrowDown 
						className={`${subMenuOpen && 'rotate-180'} duration-200`} />
				</li>
			</ul>
			<motion.ul 
				animate={
					subMenuOpen? {
						height: 'fit-content',
					}	: {
						height: 0,
					}				
				}
				className='flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0'>
				{
					data.menus.map(menu => (
						<li key={menu}>
							<NavLink to={`/${data.name}/${menu}`}
								className="link !bg-transparent capitalize">
								{menu}
							</NavLink>
						</li>
					))
				}
			</motion.ul>
		</>
	);
};

export default SubMenu;