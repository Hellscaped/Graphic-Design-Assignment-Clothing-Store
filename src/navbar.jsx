import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css'; 

class Navbar extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    render() {
        return (
            <div className="top">
                <img src="header.png" className="logo"></img>
                <div className="nav-itemholder">
                    {this.props.items.map((item, index) => (
                        <a className={item.path === window.location.pathname ? 'nav-item-active' : 'nav-item'} href={item.path} key={index}>{item.name}</a>
                    ))}
                </div>
            </div>
        )
    }
}

export default Navbar;