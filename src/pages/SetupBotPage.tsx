import {
  Heading,
  Flex,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  Code,
} from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";

import Page from "../components/Page";
import FancyText from "../components/FancyText";
import CustomLink from "../components/CustomLink";

function SetupBotPage() {
  const { t } = useTranslation();

  return (
    <Page metaTitle="setup-bot" fontFamily="Gabarito">
      <Flex flexDir="column" alignItems="center">
        <FancyText
          as="h1"
          mb={-4}
          fontSize={{ base: "64px", md: "96px" }}
          whiteSpace="nowrap"
        >
          {t("pages.setup-bot.botTitle")}
        </FancyText>
        <Heading
          as="h2"
          fontFamily="inherit"
          textAlign="center"
          lineHeight="36px"
          letterSpacing="1px"
        >
          <Trans i18nKey="pages.setup-bot.botDescription">
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
          <Trans i18nKey="pages.setup-bot.pageUse">
            <FancyText as="span" />
          </Trans>
        </Heading>
      </Flex>
      <Divider my={4} />
      <Flex flexDir="column" gap={4} fontSize="18px">
        <Text>
          <Trans i18nKey="pages.setup-bot.instructions.code">
            <CustomLink to="https://github.com/shoonkey/puban-bot" />
          </Trans>
        </Text>
        <Heading as="h2" size="md">
          {t("pages.setup-bot.instructions.thingsNeeded.title")}
        </Heading>
        <UnorderedList>
          <ListItem>
            {t("pages.setup-bot.instructions.thingsNeeded.items.terminal")}
          </ListItem>
          <ListItem>
            <Trans i18nKey="pages.setup-bot.instructions.thingsNeeded.items.nodejs">
              <CustomLink to="https://nodejs.org" />
            </Trans>
          </ListItem>
          <ListItem>
            <Trans i18nKey="pages.setup-bot.instructions.thingsNeeded.items.git">
              <CustomLink to="https://git-scm.com/" />
            </Trans>
          </ListItem>
        </UnorderedList>
        <Heading as="h2" size="md">
          {t("pages.setup-bot.instructions.gettingTheCode.title")}
        </Heading>
        <Text>
          {t("pages.setup-bot.instructions.gettingTheCode.runGitCode")}
          <Code
            display="block"
            whiteSpace="nowrap"
            px={4}
            py={2}
            maxW="100%"
            overflowX="auto"
          >
            git clone --recurse-submodules
            https://github.com/Shoonkey/puban-bot.git
          </Code>
          <Trans i18nKey="pages.setup-bot.instructions.gettingTheCode.withoutGit">
            <CustomLink to="https://github.com/shoonkey/puban-languages" />
          </Trans>{" "}
          <Text as="i">
            <Trans i18nKey="pages.setup-bot.instructions.gettingTheCode.placeFiles">
              <Code display="inline-block" />
            </Trans>
          </Text>
        </Text>
        <Text>
          <Trans i18nKey="pages.setup-bot.instructions.gettingTheCode.readme">
            <CustomLink to="https://github.com/shoonkey/puban-bot#readme" />
          </Trans>
        </Text>
        <Heading as="h2" size="md">
          {t("pages.setup-bot.instructions.keepingBotOnline.title")}
        </Heading>
        <Text>
          <Trans i18nKey="pages.setup-bot.instructions.keepingBotOnline.description">
            <CustomLink to="https://aws.amazon.com/ec2/" />
          </Trans>
        </Text>
        <Heading as="h2" size="md">
          {t("pages.setup-bot.instructions.thatsIt.title")}
        </Heading>
        <Text>
          <Trans i18nKey="pages.setup-bot.instructions.thatsIt.description">
            <FancyText as="span" />
            <FancyText as="span" />
          </Trans>
        </Text>
      </Flex>
    </Page>
  );
}

export default SetupBotPage;
