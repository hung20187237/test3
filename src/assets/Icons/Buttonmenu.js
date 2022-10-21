import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import buttonmenu from './button_menu.svg'

export default function Buttonmenu() {
  return (
    <Box>
        <Image height='100%'  src={buttonmenu}  alt="button" />
    </Box>
  )
}
