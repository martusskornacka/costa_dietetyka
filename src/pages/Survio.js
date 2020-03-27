import React from 'react';

class Survio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfAnswear: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Ile jesz posiłków w ciągu dnia?

                <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Ile szklanek wody jesteś w stanie wypić wciągu dnia?
                     <input
                        name="numberOfAnswear"
                        type="number"
                        value={this.state.numberOfAnswear}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Survio;