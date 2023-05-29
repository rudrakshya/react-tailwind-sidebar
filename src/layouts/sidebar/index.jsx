// import react
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// import components
import SubMenu from './SubMenu';

// react icons
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineDatabase } from 'react-icons/hi';
import { SlSettings } from 'react-icons/sl';
import { RiBuilding3Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';

const Sidebar = () => {
	const SidebarAnimation = {
		open: {
			width: "16rem",
			transition: {
				damping: 40,
			}
		},
		closed: {
			width: "4rem",
			transition: {
				damping: 40,
			}
		}
	}	

	const subMenuList = [
		{
			name: "build",
			icon: RiBuilding3Line,
			menus: ["auth", "app settings", "storage", "hosting"],
		},
		{
			name: "analytics",
			icon: TbReportAnalytics,
			menus: ["dashboard", "realtime", "events"],
		}
	];

	const [isOpen, setIsOpen] = useState(true);

	return (
		<div>
			<motion.div
				variants={SidebarAnimation}
				animate={isOpen ? "open" : "closed"}
				className="bg-white text-grey shadow-xl z-[990] w-[16rem] max-w-[16rem]
				h-screen overflow-hidden md:relative fixed">

				
				<div className='flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-2'>
					<img src="https://img.icons8.com/color/512/firebase.png" 
						alt="..." 
						width={45}/>
						<span className='text-xl whitespace-pre'>Fireball</span>
				</div>

				{/* Menus */}
				<div className='flex flex-col h-full'>
					<ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col
						gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white
						scrollbar-thumb-slate-100'>
						<li>
							<NavLink to="/" className={"link"}>
								<AiOutlineAppstore size={23} className='min-w-max' />
								All Apps
							</NavLink>
						</li>

						<li>
							<NavLink to="/authentication" className={"link"}>
								<BsPerson size={23} className='min-w-max' />
								Authentication
							</NavLink>
						</li>

						<li>
							<NavLink to="/storage" className={"link"}>
								<HiOutlineDatabase size={23} className='min-w-max' />
								Storage
							</NavLink>
						</li>

						{/* With submenu */}
						{
							isOpen && (
							<div className='border-y py-5 border-slate-300'>
								<small className='pl-3 text-slate-500 inline-block mb-2'>
									Product Categories
								</small>
								{
									subMenuList?.map(menu=>(
										<div key={menu.name} className='flex flex-col gap-1'>
											<SubMenu data={menu} />
										</div>
									))
								}
							</div>
						)}

						<li>
							<NavLink to="/settings" className={"link"}>
								<SlSettings size={23} className='min-w-max' />
								Settings
							</NavLink>
						</li>
					</ul>
				</div>

				{/* Controll button */}
				<motion.div 
					animate={
						isOpen ? {
							x: 0,
							y: 0,
							rotate: 0,
						}: {
							x: -10,
							y: -200,
							rotate: 180,
						}
					}
					transition={{duration: 0}}
					onClick={() => setIsOpen(!isOpen)}
					className='absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden'>
					<IoIosArrowBack size={25} />
				</motion.div>
			</motion.div> 
		</div>
	);
};

export default Sidebar