import { StackNavigator } from "react-navigation";
import MenuScreen from "../screens/menuscreen";
import GameScreen from "../screens/gamescreen";

export default (RootNavigator = StackNavigator(
  {
    Home: {
      screen: MenuScreen
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


