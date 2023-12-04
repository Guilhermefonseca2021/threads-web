import {
  Avatar,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../../components/Actions";
import { useState } from "react";
import Comment from "../../components/Comment";

export default function PostPage() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/92196697?v=4"
            size={"md"}
            name="Mark Zuckerberg"
          />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              guilherme fonseca
            </Text>
            <Image
              src="https://www.pngall.com/wp-content/uploads/8/Verification-Blue-Tick-PNG.png"
              w="4"
              h={4}
              ml={4}
            />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={23}>let's talk about Threads.</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image
          src={
            "https://media.istockphoto.com/photos/black-cat-working-at-the-computer-as-a-developer-online-picture-id858935040?k=6&m=858935040&s=170667a&w=0&h=ZLwjnIBL5_L-yjFHQJoPaI6x9QV-IGLy4a0Mp3TqXLM="
          }
          w={"full"}
        />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"}>{130 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2x1"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get❤️</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="looks like really good!"
        createdAt="2d"
        likes={356}
        username="eliora drigon"
        userAvatar="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Comment
        comment="such good!"
        createdAt="2d"
        likes={42}
        username="mia danger"
        userAvatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Comment
        comment="unbelievible nice see"
        createdAt="2d"
        likes={21}
        username="clarisse abela"
        userAvatar="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}
