const { BrowserRouter, Link, Route } = ReactRouterDOM;

class Header extends React.Component{

    render(){
        let welcomeUser;
        if (this.props.user.isLoggedIn) {
           welcomeUser = (<button id="avatar" className="headerButton"> Welcome back, {this.props.user.name}!</button>)
        } else {
           welcomeUser = (<Link to="/login">Log In</Link>)
        }

        return(
            <header>
                <div id="logo">
                    <h2>Oxygen</h2>
                </div>
                <div className="buttonContainer">
                    {welcomeUser}
                    <Link to="/userProfile" >Cart</Link>
                    <Link to="/">Home</Link>
                </div>
            </header>
        )

    }
    
}

