import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function NavBarTabs() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
        
      >
        <Tab value="home" label={<span className='text-xl'>HOME</span>}/>
        <Tab value="posts" label={<span className='text-xl'>POSTS</span>} />
        <Tab value="comments" label={<span className='text-xl'>COMMENTS</span>} />
        <Tab value="portfolio" label={<span className='text-xl'>PORTFOLIO</span>} />
        <Tab value="about" label={<span className='text-xl'>ABOUT</span>} />
      </Tabs>
    </Box>
  );
}