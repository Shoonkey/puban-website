import { Link, LinkProps } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function CustomLink({ children, ...props }: LinkProps) {
  return (
    <Link {...props}>
      <Text
        color="blue.300"
        _hover={{ color: "purple.400" }}
        as="span"
        textDecoration="underline"
      >
        {children}
      </Text>
    </Link>
  );
}

export default CustomLink;
