import ThemeButton from "./headerComponents/ThemeButton";
import { HeaderProps, ThemeButtonProps } from "../types";

const Header: React.FC<HeaderProps & ThemeButtonProps> = ({
  handleThemeSwitch,
  headerThemeStyles,
  themeButtonStyles,
}): JSX.Element => {
  return (
    <header style={headerThemeStyles}>
      <div className="top-container">
        <div className="numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
      <div className="bottom-container">
        <p className="title">calc</p>
        <div className="theme-container">
          <p className="theme-container-paragraph">THEME</p>
          <div className="button-container">
            <ThemeButton
              handleThemeSwitch={handleThemeSwitch}
              themeButtonStyles={themeButtonStyles}
            ></ThemeButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
