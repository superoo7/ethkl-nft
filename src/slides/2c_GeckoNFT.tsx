import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="teal">
        <Heading margin="0 0 0 0" size={1} textColor="t-primary">
            NFT Manager
        </Heading>
        <Image height="60vh" src="img/nftgecko.png" alt="erc standard" />
        <a href="https://github.com/coingecko/nftgecko" target="_blank" rel="noopener noreferrer">
            <Heading size={5}>coingecko/nftgecko</Heading>
        </a>
    </Slide>
)
