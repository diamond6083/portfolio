import React from "react";

import './error-boundary.scss'

class ErrorBoundary extends React.Component{

    constructor(){
        super()
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error){

        return { hasErrored: true }
    }

    componentDidCatch(error, info){
        console.log(error);
    }

    render(){
        if(this.state.hasErrored){
            return <div className="error"> 
                <div className="image-wrapper">
                    <img src="https://i.ibb.co/jh0nLZ2/404-error.png" alt="Page not found" />
                </div>
            </div>
        }

        return this.props.children
    }
}

export default ErrorBoundary