import {createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../src/Pages/Main'
import NewEntry from '../src/Pages/NewEntry'
import Report from '../src/Pages/Report'

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            NewEntry,
            Report
        },
        {
            initialRouteName:"Main",
            backBehavior:"order"
        }
    )
)

export default Routes;