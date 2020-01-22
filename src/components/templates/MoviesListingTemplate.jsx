import React, {PureComponent} from "react";
import {Movies} from "../organisms/Movies/Movies.jsx";
import {Search} from "../molecules/Search/Search.jsx";
import {Pagination} from "../molecules/Pagination/Pagination.jsx";
import {connect} from "react-redux";
import {updateFromURL} from "../../actions/movies";

export class MoviesListingTemplateComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidMount() {
        this.props.dispatch(updateFromURL());
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        const {searchTerm, movies, history} = this.props;
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <>
                <Search searchTerm={searchTerm} history={history}/>
                <Movies />
                <Pagination />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
        moviesAmount: state.moviesAmount,
        searchTerm: state.searchTerm,
        searchBy: state.searchBy,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
    }
}
export const MoviesListingTemplate = connect(mapStateToProps)(MoviesListingTemplateComponent);