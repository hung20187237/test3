import React from 'react'
import {Box, Text, Flex, Image} from '@chakra-ui/react'
import buttonmenu from '../../assets/Icons/button_menu.svg'


export default function Topbar() {
  return (
    <Box
        width='100%'
        position={'fixed'}
        background='#ffff'
        height="8vh"
        padding='2vh 4vh'
        margin='2vh 4vh'
        overflowX='scroll'
    >
        <Flex justifyContent='space-between'
        >
            <Text>ALo</Text>
            <Text>VN</Text>
            <Box>
                <Image height='100%' src={buttonmenu}/>
            </Box>

            <Text>alo</Text>

        </Flex>
    </Box>
  )
}
