import PropTypes from 'prop-types'

const Avatar = ({name="RB"}) => {
    return (
        <div style={{
            background: "#000",
            color: "#FFF",
            padding: "3px",
            borderRadius: "50%"
        }}>
            {name}
        </div>
    );
};

Avatar.propTypes = {
    name: PropTypes.string
}

export default Avatar;