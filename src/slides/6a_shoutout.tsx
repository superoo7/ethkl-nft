import * as React from 'react'
import { Slide, Image } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Image src="img/nftgecko-web.png" alt="nftgecko" />
        <div className="d-flex justify-content-around">
            <a href="https://forum.nftgecko.com" target="_blank" rel="noopener noreferrer">
                NFTGecko Forum
            </a>
        </div>
    </Slide>
)
