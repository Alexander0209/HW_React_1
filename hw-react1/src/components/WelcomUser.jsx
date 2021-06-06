import React from "react"

export const WelcomeUser = (props) => {

    return (
        <div>
            <h3>Задание №1 (функцией)</h3>
            <p>Привет, {props.fio.name} {props.fio.surname}</p>
        </div>
    )
}

export class WelcomeUserByClass extends React.Component{

    render() {
        return (
            <div>
                <h3>Задание №1 (классом)</h3>
                <p>Привет, {this.props.fio.name} {this.props.fio.surname}</p>
            </div>
        )
    }
}