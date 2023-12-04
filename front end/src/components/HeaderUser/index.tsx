import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

interface UserProps {
  userName?: string;
  userInsta?: string;
  description?: string;
  imgAvatarUrl?: string;
  followersAtInstagram?: string;
}

export default function HeaderUser({
  userInsta,
  userName,
  description,
  imgAvatarUrl,
  followersAtInstagram,
}: UserProps) {
  const toast = useToast();
  const { colorMode } = useColorMode();

  function copyUrl() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({ description: "Copied " });
    });
  }

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"larger"} fontWeight={"bold"}>
            {userName || "Guilherme Fonseca"}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>{userName || "fonseca"}</Text>
            <Text
              fontSize={{
                base: "xs",
                md: "sm",
                lg: "md",
              }}
              bg={colorMode === "dark" ? "gray.dark" : "gray.light"}
              color={"whiteRed"}
              p={1}
              borderRadius={"full"}
            >
              {userName || "threads.net"}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name={userName || "guilherme fonseca"}
            src={
              imgAvatarUrl ||
              "https://avatars.githubusercontent.com/u/92196697?v=4"
            }
            size={{
              base: "md",
              md: "lg",
              // lg: "lg"
            }}
          />
        </Box>
      </Flex>
      <Text>
        {description || "Co-founder, executive chairman and CEO of DEVPLOYS."}
      </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} align={"center"}>
          <Text color={"gray.light"}>
            {followersAtInstagram || "3.2k followers"}
          </Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"} />
          <Link to={userInsta || ""} color="gray.light">
            Instagram.com
          </Link>
        </Flex>
        <Flex>
          <Box display={"flex"} gap={4}>
            <Box className="icon-container">
              <BsInstagram size={22} cursor="pointer" />
            </Box>
            <Box className="icon-container">
              <Menu>
                <MenuButton>
                  <CgMoreO size={22} cursor="pointer" />
                </MenuButton>
                <Portal>
                  <MenuList bg={colorMode}>
                    <MenuItem bg={colorMode} onClick={copyUrl}>
                      Copy Link
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Threads</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
}
