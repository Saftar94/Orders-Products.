import Fotoimg from '../svg&image/image/myFoto.jpeg'
import Fotoimgx1 from '../svg&image/image/myFotox1.jpeg'
import Fotoimgx2 from '../svg&image/image/myFotox2.jpeg'
import styled from 'styled-components'

const Images = styled.img`
width:90px;
height:90px;
border-radius: 50%;
transform: rotate(-20deg);
`

export const ResponsiveImage  =() => {
    return (
    <Images 
    srcSet={`${Fotoimgx1} 320w, ${Fotoimgx2} 680w, ${Fotoimg}   960w, ${Fotoimg} 1980w`}
    src={Fotoimg}
    alt="My Image"
    />
    );
   }