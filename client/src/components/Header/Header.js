import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <a href="/" className="logo_link">
                            <h4 className="logo_text">Mamma Express</h4>
                        </a>
                    </div>
                    <div className="col-6 search-bar">
                        <input type="text" className="search-bar_field"/>
                    </div>
                    <div className="col-2 sign-in">
                        <button className="btn btn-light sign-in_btn">
                            Sign In
                        </button>
                    </div>
                    <div className="col menu">
                         <span className="menu_btn">
                            <i className="fas fa-bars" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;