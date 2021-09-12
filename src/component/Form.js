import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form style={{ marginTop: '25px' }}>
                    <label >Search </label>
                    <input type="text" placeholder='Enter City Name !' onChange={this.props.handleChange} />
                    <button onClick={this.props.handleClick}>Explore!</button>
                </form>

            </div>
        )
    }
}

export default Form
