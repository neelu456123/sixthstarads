import "./styles/style.css"
import { useEffect } from "react";
import './styles/global.css'
import './styles/responsive.css'



const MyApp = ({ Component, pageProps, auth }) => {
    useEffect(() => {
     
    }, []); 
    return (
      <div>
        <Component {...pageProps} />
       
      </div>
    )
  }
  export default MyApp