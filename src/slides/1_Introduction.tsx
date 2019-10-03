import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import '../style/shake.css'
export default (
    <Slide transition={['zoom']} bgImage="img/ancient-animal.jpg">
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '4px' }}>
            <Heading margin="0 0 0 30px" size={1} caps lineHeight={1} textColor="t-primary">
                <span className="patrick-hand">How NFT Works?</span>
            </Heading>
            <Heading margin="30px 0 0 0" size={3} textColor="t-primary" bold caps>
                <span className="patrick-hand">Johnson Lai</span>
            </Heading>
            <Heading margin="30px 0 0 0" size={6} textColor="t-primary" bold caps>
                <span className="patrick-hand">ETHKL Meetup</span>
                <br />
                <span className="patrick-hand">3/10/2019</span>
            </Heading>
            <div className="d-flex justify-content-center">
                {[1, 2, 3, 4, 5].map(val => (
                    <Image
                        className="img_shake"
                        height={180}
                        src={`img/gecko/${val}.png`}
                        alt={`gecko-${val}`}
                        key={val}
                    />
                ))}
            </div>
        </div>
    </Slide>
)
