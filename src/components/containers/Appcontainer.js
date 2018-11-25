import React,{ Component ,Fragment}         from "react";
import {connect}                            from "react-redux";
import * as action                        from 'actions/action'
import App from 'components/views/App'




const mapStateToProps = (state) => {
  return {
    firstReducer:state.firstReducer,
    secondReducer:state.secondReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVacations: () => {
            dispatch(action.fetchVacation());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
