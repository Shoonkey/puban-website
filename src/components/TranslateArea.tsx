import { Textarea, TextareaProps, useColorModeValue } from "@chakra-ui/react";

interface TranslateAreaProps extends TextareaProps {
  mode: "input" | "output";
}

function TranslateArea({ mode, ...props }: TranslateAreaProps) {
  const borderColor = useColorModeValue("gray.400", "gray.700");
  const hoveredBorderColor = useColorModeValue("gray.700", "gray.500");

  const isReadOnly = props.isReadOnly || mode === "output";

  return (
    <Textarea
      height="200px"
      fontSize="24px"
      borderColor={borderColor}
      _hover={{ borderColor: hoveredBorderColor }}
      isReadOnly={isReadOnly}
      cursor={isReadOnly ? "not-allowed" : "auto"}
      {...props}
    />
  );
}

export default TranslateArea;
