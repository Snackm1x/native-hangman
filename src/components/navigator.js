import { StackNavigator } from "react-navigation";
import MainMenu from "./mainmenu";
import GameScreen from "./gamescreen";

export default (RootNavigator = StackNavigator(
  {
    Home: {
      screen: MainMenu
    },
    Game: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
        headerStyle: {
          backgroundColor: '#6b6c6d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
  }
));


