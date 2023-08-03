import Calculator from "./components/Calculator";
import {
  Theme,
  ThemesArray,
  groupedStylesArray,
  groupedStyleObject,
} from "./types";
import { useState } from "react";

const themes: ThemesArray = [
  {
    justifyContent: "flex-start",
    backgrounds: {
      main: "hsl(222, 26%, 31%)",
      toggle: "hsl(223, 31%, 20%)",
      screen: "hsl(224, 36%, 15%)",
    },
    keys: {
      keyColorOne: "hsl(225, 21%, 49%)",
      keyColorTwo: "hsl(224, 28%, 35%)",
      keyColorThree: "hsl(6, 63%, 50%)",
      keyColorFour: "hsl(6, 70%, 34%)",
      keyColorFive: "hsl(30, 25%, 89%)",
      keyColorSix: "hsl(28, 16%, 65%)",
    },
    text: {
      textColorOne: "hsl(0, 0%, 100%)",
      textColorTwo: "hsl(221, 14%, 31%)",
      textColorThree: "hsl(0, 0%, 100%)",
      textColorFour: "hsl(0, 0%, 100%)",
    },
  },
  {
    justifyContent: "center",
    backgrounds: {
      main: "hsl(0, 0%, 90%)",
      toggle: "hsl(0, 5%, 81%)",
      screen: "hsl(0, 0%, 93%)",
    },
    keys: {
      keyColorOne: "hsl(185, 42%, 37%)",
      keyColorTwo: "hsl(185, 58%, 25%)",
      keyColorThree: "hsl(25, 98%, 40%)",
      keyColorFour: "hsl(25, 99%, 27%)",
      keyColorFive: "hsl(45, 7%, 89%)",
      keyColorSix: "hsl(35, 11%, 61%)",
    },
    text: {
      textColorOne: "hsl(0, 0%, 100%)",
      textColorTwo: "hsl(60, 10%, 19%)",
      textColorThree: "hsl(0, 0%, 100%)",
      textColorFour: "hsl(60, 10%, 19%)",
    },
  },
  {
    justifyContent: "flex-end",
    backgrounds: {
      main: "hsl(268, 75%, 9%)",
      toggle: "hsl(268, 71%, 12%)",
      screen: "hsl(268, 71%, 12%)",
    },
    keys: {
      keyColorOne: "hsl(281, 89%, 26%)",
      keyColorTwo: "hsl(285, 91%, 52%)",
      keyColorThree: "hsl(176, 100%, 44%)",
      keyColorFour: "hsl(177, 92%, 70%)",
      keyColorFive: "hsl(268, 47%, 21%)",
      keyColorSix: "hsl(290, 70%, 36%)",
    },
    text: {
      textColorOne: "hsl(198, 20%, 13%)",
      textColorTwo: "hsl(52, 100%, 62%)",
      textColorThree: "hsl(0, 0%, 100%)",
      textColorFour: "hsl(52, 100%, 62%)",
    },
  },
];

const App: React.FC = (): JSX.Element => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const selectedTheme: Theme = themes[selectedThemeIndex];

  const handleThemeSwitch = (): void => {
    setSelectedThemeIndex(
      (prevIndex: number) => (prevIndex + 1) % themes.length
    );
  };

  // * Global, header, screen, keypad
  const groupedStyles: groupedStylesArray = [
    {
      backgroundColor: selectedTheme.backgrounds.main,
    },
    {
      color: selectedTheme.text.textColorFour,

      themeButtonStyles: {
        backgroundColor: selectedTheme.backgrounds.toggle,
        justifyContent: selectedTheme.justifyContent,
        themeButtonStylesFill: {
          fill: selectedTheme.keys.keyColorThree,
        },
      },
    },
    {
      color: selectedTheme.text.textColorFour,
      backgroundColor: selectedTheme.backgrounds.screen,
    },
    {
      backgroundColor: selectedTheme.backgrounds.toggle,

      groupedKeyStylesOne: {
        backgroundColor: selectedTheme.keys.keyColorFive,
        boxShadow: `0 5px 0 0 ${selectedTheme.keys.keyColorSix}`,
        color: selectedTheme.text.textColorTwo,
      },
      groupedKeyStylesTwo: {
        backgroundColor: selectedTheme.keys.keyColorOne,
        boxShadow: `0 5px 0 0 ${selectedTheme.keys.keyColorTwo}`,
        color: selectedTheme.text.textColorThree,
      },
      groupedKeyStylesThree: {
        backgroundColor: selectedTheme.keys.keyColorThree,
        boxShadow: `0 5px 0 0 ${selectedTheme.keys.keyColorFour}`,
        color: selectedTheme.text.textColorOne,
      },
    },
  ];

  return (
    <div className="App" style={groupedStyles[0]}>
      <Calculator
        handleThemeSwitch={handleThemeSwitch}
        headerThemeStyles={groupedStyles[1]}
        themeButtonStyles={
          groupedStyles[1].themeButtonStyles as groupedStyleObject
        }
        screenThemeStyles={groupedStyles[2]}
        keypadThemeStyles={groupedStyles[3]}
      ></Calculator>
    </div>
  );
};

export default App;
