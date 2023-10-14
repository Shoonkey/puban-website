import { Textarea, TextareaProps, useColorModeValue } from "@chakra-ui/react";

function TranslateArea({ isReadOnly, ...props }: TextareaProps) {
  const borderColor = useColorModeValue("gray.400", "gray.700");
  const hoveredBorderColor = useColorModeValue("gray.700", "gray.500");

  return (
    <Textarea
      maxW="800px"
      height="200px"
      mx="auto"
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
