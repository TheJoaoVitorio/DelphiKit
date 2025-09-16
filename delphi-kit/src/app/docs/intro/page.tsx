import { CardImage } from "@/src/components/CardImage/CardImage"

import setsImage from '../../../assets/sets.png'

export default function IntroPageDocs() {
    return (
        <div>
            <h2>What is DelphiKit?</h2>
            <p style={{ width: '80%' }} > <strong>DelphiKit</strong> is an open and collaborative platform that serves as a powerful showcase for <strong>Delphi components and frameworks</strong> . Our focus is to provide visibility to community-created tools, allowing developers to find what they need intuitively and visually.</p>
            <p style={{ width: '80%' }} >DelphiKit's strength comes from the <strong>community</strong> . That's why we've made the contribution process incredibly simple. In this documentation, you'll learn how to add a new project to our gallery in just a few minutes, helping other developers discover amazing tools. Let's get started!</p>
            
            <br />

            <p>inspired by</p>

            <div className="cardGrid" >
                <CardImage
                    link="https://sets.dxdns.dev/"
                    name="Sets"
                    imageUrl='https://i.imgur.com/4zq12B4.png'
                />
                <CardImage
                    link="https://github.com/Fr0sT-Brutal/awesome-pascal"
                    name="Awesome-Pascal"
                    imageUrl='https://raw.githubusercontent.com/sindresorhus/awesome/0abcf16fd22dd7f1ea42fb4ab81b9475c0fa80de/media/logo.svg'
                />    
            </div>

            
        </div>
    )
}