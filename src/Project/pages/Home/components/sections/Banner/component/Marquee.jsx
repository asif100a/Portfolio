import './marquee.css';
import ReactLogo from '../../../../../../../assets/React-Logo.png';
import ReactNativeLogo from '../../../../../../../assets/React-Native-Logo.png';
import NextLogo from '../../../../../../../assets/Next.js-Logo-2.webp';
import JavaScriptLogo from '../../../../../../../assets/JavaScript-Logo.png';
import TypeScriptLogo from '../../../../../../../assets/TypeScript-Logo.png';
import HTMLLogo from '../../../../../../../assets/HTML5-Logo.png';
import CSSLogo from '../../../../../../../assets/CSS-Logo.png';
import TailwindCSSLogo from '../../../../../../../assets/TailwindCSS-Logo.png';
import NodeJSLogo from '../../../../../../../assets/Node.js-Logo.png';
import ExpressJSLogo from '../../../../../../../assets/Express.js-Logo.png';
import MongoDBLogo from '../../../../../../../assets/MongoDB-Logo.webp';
import GithubLogo from '../../../../../../../assets/Github-Logo.png';
import ReduxLogo from '../../../../../../../assets/Redux-Logo.webp';
import FirebaseLogo from '../../../../../../../assets/Firebase-Logo.png';

const Marquee = () => {
    return (
        <div className='marquee-container mt-6 md:mt-12'>
            <div className='marquee-content'>
                <img src={ReactLogo} alt="React" />
                <img src={ReactNativeLogo} alt="React Native" />
                <img src={NextLogo} alt="NextJS" />
                <img src={JavaScriptLogo} alt="JavaScript" />
                <img src={TypeScriptLogo} alt="TypeScript" />
                <img src={HTMLLogo} alt="HTML" />
                <img src={CSSLogo} alt="CSS" />
                <img src={TailwindCSSLogo} alt="Tailwind CSS" />
                <img src={ReduxLogo} alt="Redux" />
                <img src={NodeJSLogo} alt="Node JS" />
                <img src={ExpressJSLogo} alt="Express JS" />
                <img src={MongoDBLogo} alt="MongoDB" />
                <img src={GithubLogo} alt="Github" />
                <img src={FirebaseLogo} alt="Firebase" />
            </div>
        </div>
    );
};

export default Marquee;