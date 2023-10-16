import {
  Heading,
  Flex,
  Button,
  Text,
  Box,
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { FormEventHandler, useState } from "react";

import Page from "../components/Page";

import FancyText from "../components/FancyText";
import TranslateArea from "../components/TranslateArea";
import CustomSelect from "../components/CustomSelect";
import { Link } from "react-router-dom";
import { Check, ClipboardText } from "@phosphor-icons/react";

type Operation = "encrypt" | "decrypt";
type Language = "puban" | "ubbi-dubbi" | "pig-latin";

function Homepage() {
  const [operation, setOperation] = useState<Operation>("encrypt");
  const [language, setLanguage] = useState<Language>("puban");

  const [inputText, setInputText] = useState("");

  const {
    hasCopied: hasCopiedResult,
    onCopy: handleCopyResult,
    value: resultText,
    setValue: setResultText,
  } = useClipboard("", { timeout: 3000 });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const Language = (await import(`../languages/src/${language}.ts`)).default;
    const result = Language[operation](inputText);

    setResultText(result);
  };

  return (
    <Page metaTitle="home" fontFamily="Gabarito">
      <Flex flexDir="column" alignItems="center">
        <FancyText as="h1" fontSize={{ base: "96px", md: "128px" }}>
          Puban
        </FancyText>
        <Heading
          as="h2"
          fontFamily="inherit"
          textAlign="center"
          lineHeight="48px"
          letterSpacing="1px"
        >
          A made-up cipher that uses{" "}
          <FancyText as="span" whiteSpace="nowrap">
            Ubbi Dubbi
          </FancyText>{" "}
          and{" "}
          <FancyText as="span" whiteSpace="nowrap">
            PigLatin
          </FancyText>
          .
        </Heading>
        <Heading
          as="h3"
          fontFamily="inherit"
          fontSize="24px"
          textAlign="center"
          mt={4}
          color="gray.500"
        >
          You can encrypt/decrypt from Puban and its components here.
        </Heading>
        <Heading
          as="h3"
          fontSize="24px"
          fontFamily="inherit"
          textAlign="center"
          color="gray.500"
        >
          You can also check out the also a{" "}
          <Link to="/bot">
            <Text
              color="blue.300"
              _hover={{ color: "purple.400" }}
              as="span"
              textDecoration="underline"
            >
              Discord bot
            </Text>
          </Link>
          !
        </Heading>
      </Flex>
      <Flex as="form" flexDir="column" mt={12} gap={4} onSubmit={handleSubmit} w="80%" mx="auto">
        <TranslateArea
          mode="input"
          placeholder="Text to be encrypted or decrypted goes here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Flex justifyContent="center" alignItems="center" gap={2}>
          <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
            <CustomSelect
              w="auto"
              value={operation}
              onChange={(e) => setOperation(e.target.value as Operation)}
            >
              <option value="encrypt">Encrypt to</option>
              <option value="decrypt">Decrypt from</option>
            </CustomSelect>
            <CustomSelect
              w="auto"
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
            >
              <option value="ubbi-dubbi">Ubbi Dubbi</option>
              <option value="pig-latin">PigLatin</option>
              <option value="puban">Puban</option>
            </CustomSelect>
          </Flex>
          <Button type="submit" colorScheme="blue">
            Go
          </Button>
        </Flex>
        <Flex position="relative">
          <Tooltip
            label={hasCopiedResult ? "Result copied" : "Copy result text"}
            placement="left"
            px={3}
            py={2}
            hasArrow
            borderRadius="8px"
          >
            <IconButton
              color="blue.400"
              zIndex={2}
              position="absolute"
              variant="ghost"
              right="8px"
              top="8px"
              icon={
                hasCopiedResult ? (
                  <Check size={32} />
                ) : (
                  <ClipboardText size={32} />
                )
              }
              onClick={handleCopyResult}
              aria-label={
                hasCopiedResult ? "Result copied" : "Copy result text"
              }
            />
          </Tooltip>
          <TranslateArea
            mode="output"
            placeholder="Resulting text will show here"
            value={resultText}
          />
        </Flex>
      </Flex>
    </Page>
  );
}

export default Homepage;
