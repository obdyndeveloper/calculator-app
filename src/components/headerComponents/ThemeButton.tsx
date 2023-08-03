import { ThemeButtonProps, groupedStyleObject } from "../../types";

const ThemeButton: React.FC<ThemeButtonProps> = ({
  handleThemeSwitch,
  themeButtonStyles,
}): JSX.Element => {
  const themeButtonSVG: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );

  return (
    <div className="theme-button-container" style={themeButtonStyles}>
      <button
        className="theme-button"
        onClick={handleThemeSwitch}
        style={themeButtonStyles.themeButtonStylesFill as groupedStyleObject}
      >
        {themeButtonSVG}
      </button>
    </div>
  );
};

export default ThemeButton;
