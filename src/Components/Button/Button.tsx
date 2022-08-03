import "./button.css";

type Button = "regular-lg" | "link" | "regular-sm";
enum ButtonType {
  "link" = "buttonLink",
  "regular-lg" = "buttonRegularLarge",
  "regular-sm" = "buttonRegularSmall",
}
interface ButtonProps {
  children: React.ReactElement;
  onPress: () => void;
  type: Button;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  onPress,
  type,
  style,
}: ButtonProps): React.ReactElement {
  return (
    <button style={style} onClick={onPress} className={ButtonType[type]}>
      {children}
    </button>
  );
}
