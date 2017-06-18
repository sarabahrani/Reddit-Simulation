import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class HomePage extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                    <p>hi</p>
            </MuiThemeProvider>
        );
    }
}
export default HomePage;