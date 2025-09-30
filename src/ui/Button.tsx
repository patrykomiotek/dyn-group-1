enum PALETTE {
  emerald,
  // EMERALD = "type/action", // 0
  PETER_RIVER, // 1
}

const palette = {
  emerald: "#2ecc71",
  peterRiver: "#3498db",
  carrot: "#e67e22",
  clouds: "#ecf0f1",
  midnightBlue: "#2c3e50",
};

type Color = keyof typeof palette;
// type Color = keyof typeof PALETTE;

type Props = {
  color?: Color;
  bgColor?: Color;
  children: string;
};

// export const Button = () => {}

export function Button({
  children,
  color = "clouds",
  bgColor = "midnightBlue",
}: Props) {
  const styles = {
    color: palette[color],
    backgroundColor: palette[bgColor],
  };
  return <button style={styles}>{children}</button>;
}
