import { Flex, Image, useColorMode } from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="flex-start"
      alignItems={"center"}
      mt="2"
      mb="12"
      padding={2}
      gap={2}
    >
      <Image
        width={10}
        cursor="pointer"
        alt="logo"
        src={
          colorMode === "dark"
            ? "https://freelogopng.com/images/all_img/1688663226threads-logo-png.png"
            : "https://freelogopng.com/images/all_img/1688663318threads-logo-white.png"
        }
        onClick={toggleColorMode}
      />
      Threads for <b>Developers</b>
    </Flex>
  );
}
