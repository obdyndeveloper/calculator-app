import Header from "./Header";
import Screen from "./Screen";
import Keypad from "./Keypad";
import {
  HeaderProps,
  ThemeButtonProps,
  KeypadProps,
  ScreenProps,
} from "../types";

const Calculator: React.FC<
  HeaderProps & ThemeButtonProps & ScreenProps & KeypadProps
> = ({
  handleThemeSwitch,
  headerThemeStyles,
  themeButtonStyles,
  screenThemeStyles,
  keypadThemeStyles,
}): JSX.Element => {
  return (
    <div className="Calculator">
      <Header
        handleThemeSwitch={handleThemeSwitch}
        headerThemeStyles={headerThemeStyles}
        themeButtonStyles={themeButtonStyles}
      ></Header>
      <Screen screenThemeStyles={screenThemeStyles}></Screen>
      <Keypad keypadThemeStyles={keypadThemeStyles}></Keypad>
    </div>
  );
};

export default Calculator;
