import PropTypes from 'prop-types';

const Card = ({
    backgroundColor="#000",
    title="This is a card title"
}) => {
    return (
        <div style={{
            background: backgroundColor,
            color: "#FFF",
            padding: "10px",
            borderRadius: "10px",
            width: "300px"
        }}>
            <h2>Card Header</h2>
            <div>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas at alias iure, ut veritatis fugiat cumque vitae incidunt dolorem!</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string
};

export default Card;