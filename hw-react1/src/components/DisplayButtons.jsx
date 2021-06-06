import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

class DisplayButtons extends React.Component {

    render() {
        return (
            <div>
                <h3>Задание №2</h3>
                <ul className="btnList">
                    {this.props.buttonsText.map((text, index) => {
                        return (<Button text={text} key={index} index={index}/>)
                    })}   
                </ul>
            </div>
        )
    }
}

DisplayButtons.propTypes = {
    buttonsText: PropTypes.array.isRequired
}

export default DisplayButtons;