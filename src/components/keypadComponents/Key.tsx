import { KeyProps } from "../../types";

const Key: React.FC<KeyProps> = ({
  children,
  groupedKeyStyles,
}): JSX.Element => {
  return (
    <button className="key" style={groupedKeyStyles}>
      {children}
    </button>
  );
};

export default Key;
