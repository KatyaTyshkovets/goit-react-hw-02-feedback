import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

 const Notification = ({ message }) => {
    return <Title>{message}</Title>;
};

Notification.prototype = {
    message: PropTypes.string,
};


export default Notification