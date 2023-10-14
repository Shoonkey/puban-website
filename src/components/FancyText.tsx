import { Text, TextProps } from "@chakra-ui/react";

function FancyText(props: TextProps) {
  return (
    <Text
      fontFamily="inherit"
      background="linear-gradient(90deg, hsla(189, 97%, 77%, 1) 0%, hsla(248, 100%, 74%, 1) 100%)"
      backgroundClip="text"
      {...props}
    />
  );
}

export default FancyText;
