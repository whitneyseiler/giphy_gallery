import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let Search = ({}) => {
    return (
        <form className="nav-wrapper container">
            <Row>
                <Input 
                    type="text" 
                    name="query" 
                    id="query" 
                    // value={inputValue}
                    aria-label="Search:"
                    aria-required="true"
                    label="Search:"/>
                <Button waves="light" className="hoverable" id="display">DISPLAY</Button>
            </Row>
        </form>
    )
}

export default Search;