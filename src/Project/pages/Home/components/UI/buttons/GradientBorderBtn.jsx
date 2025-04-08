import PropTypes from 'prop-types';

const GradientBorderBtn = ({ text, type }) => {
    return (
        <div className="w-fit h-fit p-[1.5px] bg-gradient-to-r from-[#fb7185] to-[#eea75b] rounded-lg cursor-pointer">
            <button className="bg-[#0d1117] rounded-lg font-medium font-text-lora lg:text-base xl:text-lg text-white">
                <div className={`px-3 py-1 ${type === 'link' ? 'gradient-text-link' : 'gradient-bg'}`}>{text}</div>
            </button>
        </div>
    );
};

GradientBorderBtn.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default GradientBorderBtn;