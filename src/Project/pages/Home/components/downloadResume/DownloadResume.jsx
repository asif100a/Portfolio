import './style_download.css';

const DownloadResume = () => {
    return (
        <>
           <a href="/Professional-Resume-v.2.pdf" download>
            <button className="btn download-btn-style">Download Resume</button>
           </a> 
        </>
    );
};

export default DownloadResume;