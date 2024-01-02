import './styles.css'
import Image from './react-image.png'
import Logo from './react-logo.svg'

export const App = () => {
    const num = 0;
    return <>
    <h1>React TypeScript Webpack</h1>
    <h3>{process.env.NODE_ENV}</h3>
    <p>dev feature {process.env.DEV_FEATURE ? 'enable' : 'disable'}</p>
    <p>prod feature {process.env.PROD_FEATURE ? 'enable' : 'disable'}</p>
    <p>SERVICE_URL: {process.env.SERVICE_URL}</p>
    {/* <p>{process.env.PROD_FEATURE}</p>
    <p>{process.env.SERVICE_URL}</p> */}
    <img src={Image} alt="React Image" width={300} height={"auto"} />
    <br/>
    <img src={Logo} alt="React Image" width={300} height={"auto"} />
    </>
}