// even if you are not using it you should really import it
import React , { Component }  from 'react' ;

class SearchBar extends Component {

    // adding the trim state
    constructor ( props ) {
        super ( props ) ;
        this.state = { term : '' } ;
    }

    // the only required function
    // this is the function that will be called when you return this component
    render () {
        return (
            <div className="row">

                <div className="col-md-4"></div>

                <div className="col-md-4" >
                    <input className="search-bar-input" onChange={ e => this.props.onVideoSearch(e.target.value) } />
                </div>

                <div className="col-md-4"></div>

            </div>
        );
    }



}


export default SearchBar ;













































































