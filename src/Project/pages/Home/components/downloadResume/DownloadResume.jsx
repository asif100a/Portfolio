import './style_download.css';

const DownloadResume = () => {
    return (
        <>
           <a href="/resume.pdf" download>
            <button className="btn download-btn-style">Download Resume</button>
           </a> 
        </>
    );
};

export default DownloadResume;