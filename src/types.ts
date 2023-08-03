// * Header
export interface HeaderProps {
  headerThemeStyles: groupedStyleObject;
}

export interface ThemeButtonProps {
  handleThemeSwitch: () => void;
  themeButtonStyles: groupedStyleObject;
}

// * Screen
export interface ScreenProps {
  screenThemeStyles: groupedStyleObject;
}

// * Keypad
export interface KeypadProps {
  keypadThemeStyles: groupedStyleObject;
}

export interface KeyProps {
  children: React.ReactNode;
  groupedKeyStyles: groupedKeyStylesType;
}

export interface groupedKeyStylesType {
  [key: string]: string;
}

// * Themes
// Define the type for the colors in the themes
interface ThemeStyles {
  [key: string]: string;
}

// Define the type for a single theme object
export interface Theme {
  justifyContent: string;
  backgrounds: ThemeStyles;
  keys: ThemeStyles;
  text: ThemeStyles;
}

// Define the type for the themes array
export interface ThemesArray extends Array<Theme> {}

// * Other
// Define the type for a single grouped style object
export interface groupedStyleObject {
  [key: string]: string | groupedStyleObject;
}

// Define the type of the array that contains multiple grouped styles objects
export interface groupedStylesArray extends Array<groupedStyleObject> {}
