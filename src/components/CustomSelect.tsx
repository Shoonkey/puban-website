import { Select, SelectProps, useColorModeValue } from "@chakra-ui/react";

function CustomSelect(props: SelectProps) {
  const borderColor = useColorModeValue("gray.400", "gray.700");
  const hoveredBorderColor = useColorModeValue("gray.700", "gray.500");

  return (
    <Select
      borderColor={borderColor}
      _hover={{ borderColor: hoveredBorderColor }}
      {...props}
    />
  );
}

export default CustomSelect;
