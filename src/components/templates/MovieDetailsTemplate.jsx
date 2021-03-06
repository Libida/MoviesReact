import React, { PureComponent} from "react";
import {connect} from "react-redux";
import {MovieDetails} from "../molecules/MovieDetails/MovieDetails.jsx";
import {updateMovie} from "../../actions/movie";

export class MovieDetailsTemplateComponent extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidMount() {
        this.props.dispatch(updateMovie());
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render(){
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return(
            <div className="container">
                <MovieDetails />
            </div>
        )
    }
}

export const MovieDetailsTemplate = connect((state) => {
    return {
        movie: state.movie
    }
})(MovieDetailsTemplateComponent);
