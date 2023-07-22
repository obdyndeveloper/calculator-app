import Header from "./Header";
import Screen from "./Screen";
import Buttons from "./Buttons";

const Calculator: React.FC = (): JSX.Element => {
  return (
    <div className="Calculator">
      <Header></Header>
      <Screen></Screen>
      <Buttons></Buttons>
    </div>
  );
};

export default Calculator;
