import './styles.css'
import Image from './react-image.png'
import Logo from './react-logo.svg'

export const App = () => {
    return <>
    <h1>React TypeScript Webpack</h1>
    <img src={Image} alt="React Image" width={300} height={"auto"} />
    <br/>
    <img src={Logo} alt="React Image" width={300} height={"auto"} />
    </>
}