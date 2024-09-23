import { Button } from "antd";

interface Props {
  item: string;
  onClick: (num: number) => void;
}
function CalculatorButton({ item, onClick }: Props) {
  return <Button onClick={onClick(parseInt('1'))}>{item}</Button>;
}

export default CalculatorButton;
