import React from "react"
import PropTypes from 'prop-types'

class Button extends React.Component {

    render() {
        return (
        <div>
            <button className={"class"+this.props.index}>{this.props.text}</button>
        </div>
        )
    }
}

Button.defaultProps = {text: "Default text"}

Button.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
}

export default Button;
