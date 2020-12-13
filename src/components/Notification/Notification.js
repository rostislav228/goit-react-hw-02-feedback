import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
