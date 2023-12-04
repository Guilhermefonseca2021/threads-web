// Em Actions.tsx
import { Flex } from "@chakra-ui/react";
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";

interface ActionsProps {
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Actions({ liked, setLiked }: ActionsProps) {
  return (
    <Flex gap={3} onClick={(e) => e.preventDefault()}>
      {liked === true ? (
        <FaHeart color="red" onClick={() => setLiked(!liked)} />
      ) : (
        <FaRegHeart onClick={() => setLiked(!liked)} />
      )}
      <FaRegComment />
      <FaRepeat />
      <PiShareFat />
    </Flex>
  );
}
