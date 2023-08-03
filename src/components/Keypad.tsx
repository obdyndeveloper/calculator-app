import Key from "./keypadComponents/Key";
import {
  KeypadProps,
  groupedStyleObject,
  groupedKeyStylesType,
} from "../types";

const Keypad: React.FC<KeypadProps> = ({ keypadThemeStyles }): JSX.Element => {
  const keys: Array<string> = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];

  return (
    <div className="keypad" style={keypadThemeStyles as groupedStyleObject}>
      {keys.map((keyValue: string, index: number) => {
        if (keyValue === "DEL") {
          return (
            <Key
              key={index}
              groupedKeyStyles={
                keypadThemeStyles.groupedKeyStylesTwo as groupedKeyStylesType
              }
            >
              {keyValue}
            </Key>
          );
        } else {
          return (
            <Key
              key={index}
              groupedKeyStyles={
                keypadThemeStyles.groupedKeyStylesOne as groupedKeyStylesType
              }
            >
              {keyValue}
            </Key>
          );
        }
      })}
      <Key
        groupedKeyStyles={
          keypadThemeStyles.groupedKeyStylesTwo as groupedKeyStylesType
        }
      >
        RESET
      </Key>
      <Key
        groupedKeyStyles={
          keypadThemeStyles.groupedKeyStylesThree as groupedKeyStylesType
        }
      >
        =
      </Key>
    </div>
  );
};

export default Keypad;
