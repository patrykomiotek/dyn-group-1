type Props = {
  color: "red" | "green" | "blue";
  children: string; // children, key, htmlFor, style, className
  // children: React.ReactNode;
};

export function Text(props: Props) {
  const color = props.color;
  const style = {
    backgroundColor: color,
  };
  return <p style={style}>{props.children}</p>;
}

// export { Text }
