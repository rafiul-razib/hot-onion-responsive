import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
              <InputGroup className="mb-3 w-75 search-food">
                    <FormControl
                    placeholder="Type your desired food name"
                    aria-label="food name"
                    aria-describedby="basic-addon2"
                    className = "my-auto"
                    />
                    <InputGroup.Text id="basic-addon2" className="btn-pink">Search Food</InputGroup.Text>
                </InputGroup>

                {/* <div className="input-group mb-3 w-75">
                <input type="text" className="form-control search-food my-auto" placeholder="Search your desired food" aria-label="search food" aria-describedby="basic-addon2"/>
                <span className="input-group-text my-auto btn-pink" id="basic-addon2">Search food</span>
                </div> */}
        </div>
    );
};

export default Banner;