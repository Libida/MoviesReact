import React, {Component} from "react";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.isOpen || false,
            text: props.text || ""
        };
        this.id = props.id;

        this.handleClose = this.hideModal.bind(this);
    }

    showModal(text) {
        this.setState({
            isOpen: true,
            text: text
        });
    }

    hideModal() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return(
            <div className={`modal ${this.state.isOpen ? "" : "hidden"}`} tabIndex="-1" role="dialog" id={this.id}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={this.handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>${this.state.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}