import Lottie from 'react-lottie';
import animationData from './lottie.json'

import './loader.scss'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return ( 
       <div className="loader">
             <Lottie options={defaultOptions} height={50} width={50} />
       </div>
    );
}

export default Loader;