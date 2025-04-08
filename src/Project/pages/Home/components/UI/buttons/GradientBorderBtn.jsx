import PropTypes from 'prop-types';

const GradientBorderBtn = ({ children }) => {
    return (
        <div className="w-fit h-fit p-[1.5px] bg-gradient-to-r from-[#fb7185] to-[#eea75b] rounded-lg cursor-pointer">
            <button className="px-3 py-1 bg-[#0d1117] rounded-lg font-medium font-text-lora lg:text-base xl:text-lg">
                {children}
            </button>
        </div>
    );
};

GradientBorderBtn.propTypes = {
    children: PropTypes.node.isRequired
};

export default GradientBorderBtn;