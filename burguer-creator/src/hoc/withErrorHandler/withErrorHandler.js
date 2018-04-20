import React, { Component } from 'react';

// import classes from './withErrorHanlder.css';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHanlder = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentWillMount() {
      // Clearing the error before a new request
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      // If the response threw an error, lets display the error message via the
      // modal
      this.responseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        });
    }

    componentWillUnmount() {
      // Unless we eject the interceptors they will always be listening even if
      // the component is unmounted, therefore we need to eject the interceptors
      // before this happens.
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
};

export default withErrorHanlder;