import logo from './logo.svg';
import './App.css';
import Topbar from './Component/Topbar/Topbar';
import { Box, Image } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Topbar/>
      <Box background='#282c34'>
        <Image src={logo}/>
      </Box>
    </>

  );
}

export default App;
