import GradientBorderBtn from '../buttons/GradientBorderBtn';
import './style_download.css';

const DownloadResume = () => {
    return (
        <>
            <a href="/N.M._Asif_Sheikh_Junior_Fullstack_Engineer.pdf" download>
                <GradientBorderBtn>
                    <span>Download Resume</span>
                </GradientBorderBtn>
            </a>
        </>
    );
};

export default DownloadResume;