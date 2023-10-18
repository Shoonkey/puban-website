import {
  Heading,
  Flex,
  Button,
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { FormEventHandler, useState } from "react";
import { Check, ClipboardText } from "@phosphor-icons/react";
import { Trans, useTranslation } from "react-i18next";

import Page from "../components/Page";

import FancyText from "../components/FancyText";
import TranslateArea from "../components/TranslateArea";
import CustomSelect from "../components/CustomSelect";
import CustomLink from "../components/CustomLink";

type Operation = "encrypt" | "decrypt";
type Language = "puban" | "ubbi-dubbi" | "pig-latin";

function Homepage() {
  const { t } = useTranslation();

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
        <FancyText as="h1" mb={-6} fontSize={{ base: "96px", md: "128px" }}>
          Puban
        </FancyText>
        <Heading
          as="h2"
          fontFamily="inherit"
          textAlign="center"
          lineHeight="36px"
          letterSpacing="1px"
        >
          <Trans i18nKey="pages.home.pubanDescription">
            <FancyText as="span" whiteSpace="nowrap" />
            <FancyText as="span" whiteSpace="nowrap" />
          </Trans>
        </Heading>
        <Heading
          as="h3"
          fontFamily="inherit"
          fontSize="24px"
          textAlign="center"
          mt={4}
          color="gray.500"
        >
          {t("pages.home.pageUse")}
        </Heading>
        <Heading
          as="h3"
          fontSize="24px"
          fontFamily="inherit"
          textAlign="center"
          color="gray.500"
        >
          <Trans i18nKey="pages.home.discordBot">
            <CustomLink to="/bot" />
          </Trans>
        </Heading>
      </Flex>
      <Flex
        as="form"
        flexDir="column"
        mt={12}
        gap={4}
        onSubmit={handleSubmit}
        w="80%"
        mx="auto"
      >
        <TranslateArea
          mode="input"
          placeholder={t("pages.home.input.placeholder")}
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
              <option value="encrypt">
                {t("pages.home.operation.options.encrypt")}
              </option>
              <option value="decrypt">
                {t("pages.home.operation.options.decrypt")}
              </option>
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
            {t("pages.home.operation.button")}
          </Button>
        </Flex>
        <Flex position="relative">
          <Tooltip
            label={t(
              `pages.home.copyButton.${
                hasCopiedResult ? "done" : "action"
              }`
            )}
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
              aria-label={t(
                `pages.home.copyButton.${
                  hasCopiedResult ? "done" : "action"
                }`
              )}
            />
          </Tooltip>
          <TranslateArea
            mode="output"
            placeholder={t("pages.home.output.placeholder")}
            value={resultText}
          />
        </Flex>
      </Flex>
    </Page>
  );
}

export default Homepage;
