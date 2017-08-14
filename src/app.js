import React from 'react';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AllReddit from './components/allReddit';
class App extends React.Component {
    render() {
        return (
            // <MuiThemeProvider>
            <div>
                <header>Reddit</header>
                <AllReddit />
                <footer>Reddit</footer>
            </div>
            //  </MuiThemeProvider>
        );
    }
}
export default App;