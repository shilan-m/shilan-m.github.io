import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Outlet, Link as RouterLink} from "react-router-dom";

export default function NavTabs() {
	const currPath = window.location.hash.substring(2);
  	const [value, setValue] = React.useState(currPath);

	const handleChange = (event, newValue) => {
		setValue(newValue);  
	};

	const pages = [
		{value:'about', label: "About Me"},
		{value: 'blogs', label: 'Learning Blogs'},
		{value: 'newBlog', label: 'New Blog'}
	]
	const TabItems = pages.map((page) => 
		<Tab key={page.value} value={page.value} label={page.label} component={RouterLink} to={page.value}></Tab>
	)

	return (
		<Box sx={{ width: '100%' }}>
			<AppBar position="static" style={{background: '#90EE90'}} >
				<Tabs
					value={value}
					onChange={handleChange}
					// textColor="secondary"
					// indicatorColor="secondary"
					>
					{TabItems}
				</Tabs>
			</AppBar>
			<Outlet />
		</Box>
	);
}
