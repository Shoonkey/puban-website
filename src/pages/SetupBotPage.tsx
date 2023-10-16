import {
  Heading,
  Flex,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  Code,
} from "@chakra-ui/react";

import Page from "../components/Page";

import FancyText from "../components/FancyText";
import CustomLink from "../components/CustomLink";

function Homepage() {
  return (
    <Page metaTitle="setup-bot" fontFamily="Gabarito">
      <Flex flexDir="column" alignItems="center">
        <FancyText
          as="h1"
          mb={-4}
          fontSize={{ base: "64px", md: "96px" }}
          whiteSpace="nowrap"
        >
          Puban bot
        </FancyText>
        <Heading
          as="h2"
          fontFamily="inherit"
          textAlign="center"
          lineHeight="36px"
          letterSpacing="1px"
        >
          A Discord bot that encrypts to and decrypts from{" "}
          <FancyText as="span" whiteSpace="nowrap">
            Puban
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
          The bot is <FancyText as="span">open source</FancyText> and you can
          set it up yourself!
        </Heading>
      </Flex>
      <Divider my={4} />
      <Flex flexDir="column" gap={4} fontSize="18px">
        <Text>
          The code is all hosted on Github, over{" "}
          <CustomLink to="https://github.com/shoonkey/puban-bot">
            here
          </CustomLink>
          .
        </Text>
        <Heading as="h2" size="md">
          What you'll need
        </Heading>
        <UnorderedList>
          <ListItem>
            A terminal where you can run commands (a Windows command prompt, or
            an UNIX terminal).
          </ListItem>
          <ListItem>
            NodeJS, to run the code.{" "}
            <CustomLink to="https://nodejs.org">NodeJS</CustomLink> is a tool
            that allows running JavaScript out of the browser.
          </ListItem>
          <ListItem>
            Git, ideally, to easily download the code.{" "}
            <CustomLink to="https://git-scm.com/">Git</CustomLink> is a version
            management tool that also allows for downloading and updating code
            efficiently.
          </ListItem>
        </UnorderedList>
        <Heading as="h2" size="md">
          Getting the code
        </Heading>
        <Text>
          With Git installed, you can get the code by running
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
          If you choose to not install Git, you can download the ZIP for the
          code in the repository website. As it uses a submodule from another
          repository, you'll also need to download the ZIP from the{" "}
          <CustomLink to="https://github.com/shoonkey/puban-languages">
            language repository
          </CustomLink>{" "}
          and{" "}
          <Text as="i">
            place the files from inside the zipped folder inside the{" "}
            <Code display="inline-block">languages</Code> folder.
          </Text>
        </Text>
        <Text>
          Then, assuming you have NodeJS installed and the code files placed
          properly, you can follow the instructions on the{" "}
          <CustomLink to="https://github.com/shoonkey/puban-bot#readme">
            README
          </CustomLink>{" "}
          file from the repository. It will teach how to install the code's
          denpedencies, deploy the bot's slash commands and start listening for
          and responding them.
        </Text>
        <Heading as="h2" size="md">
          Keeping the bot online
        </Heading>
        <Text>
          After you've followed the instructions, as long as your start command
          is running, your bot will be online! To keep it online continuously,
          the process will need to run nonstop somewhere. You can choose to
          deploy on whatever service you prefer, like in{" "}
          <CustomLink to="https://aws.amazon.com/ec2/">AWS EC2</CustomLink>, for
          example. Bear in mind that having a server usually implies costs! For
          the purpose of just playing around with the bot, running it on your
          machine will probably be enough.
        </Text>
        <Heading as="h2" size="md">
          That's it!
        </Heading>
        <Text>
          That's it for setting up the bot. I hope you have fun with it! I coded
          it in a way you can add more languages if you want to. So what are{" "}
          <FancyText as="span">you</FancyText> gonna{" "}
          <FancyText as="span">build</FancyText>?
        </Text>
      </Flex>
    </Page>
  );
}

export default Homepage;
