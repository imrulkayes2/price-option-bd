import PropTypes from 'prop-types';
import { AiFillCheckSquare } from "react-icons/ai";
const Feature = ({ feature }) => {
    return (
        <div className='text-start pl-4'>
            <p className='flex items-center '><AiFillCheckSquare className='text-green'></AiFillCheckSquare>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;