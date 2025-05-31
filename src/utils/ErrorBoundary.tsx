import { Component, type ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: ErrorBoundaryProps) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error): { hasError: boolean } {
        console.error(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error.message, errorInfo);
    }

    render(){
        if(this.state.hasError ){
            return(
                <div className="error-boundary">
                    <h1>Something went wrong.</h1>
                    <p>Please try refreshing the page or come back later.</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;