import React, {Component} from 'react';
import '../css/media.css';
import PropTypes from 'prop-types'; // ES6

class Media extends Component {
    /* ES6  ejecución del bind
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    constructor(props){
        super(props);
        this.state = {
            author: props.author,
        };
    }
    */

    // ES7 arrow function
    state = {
        author: this.props.author
    };

    handleClick = (event) => {
        console.log(this.props.author);
        this.setState({
            author: 'Juan Perez'
        });
    }

  render() {
     
    return (
        <div className="Media" onClick={this.handleClick}>
            <div className="Media-cover">
                <img
                    src={this.props.cover}
                    alt=""
                    className="Media-image"
                />
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.state.author}</p>
                {/*<p>{this.props.time}</p>*/}
            </div>
        </div>
    )
  }
}

Media.propTypes ={
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    //time: PropTypes.number,
    type:PropTypes.oneOf(['video','audio'])
}

export default Media;
