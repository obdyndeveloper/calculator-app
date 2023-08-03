import { ScreenProps } from "../types";

const Screen: React.FC<ScreenProps> = ({ screenThemeStyles }): JSX.Element => {
  return (
    <div className="screen" style={screenThemeStyles}>
      <p className="display">399,981</p>
    </div>
  );
};

export default Screen;
