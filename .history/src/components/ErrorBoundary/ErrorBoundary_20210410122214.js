import React from 'react';
import ImageWrapper from '../ImageWrapper';
import style from './ErrorBoundary.module.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <ImageWrapper />
                    <h1 className={style["error-message"]}>Something went wrong!</h1>
                </>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;