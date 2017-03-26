import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map( (book) =>{
            return (
                <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up as props
    return {
        books : state.books
    }
}

//Anything returned fro this function will end up as props on BookList container
// It's for container action
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container
// about this new dispatch medhtod, selectBook. Make it availatble as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);