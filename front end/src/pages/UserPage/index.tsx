import HeaderUser from "../../components/HeaderUser";
import PostUser from "../../components/PostUser";

export default function UserPage() {
  return (
    <>
      <HeaderUser />
      <PostUser username="ricardo avilela" likes={233} replies="342" title="my cat is just the most beautful" postImg="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <PostUser username="diego brando" likes={3443} replies="6.7k" title="i guess what i could do without this lithe thing..." postImg="https://images.unsplash.com/photo-1608395868278-bd8c8db2e15e?q=80&w=6006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
      <PostUser username="eustass kid" likes={443} replies="3.6k" title="i guess what i could do without this lithe thing..." postImg="https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <PostUser username="okuyaso noritoshi" likes={243} replies="2k" title="this the most funniest how i said just see, mine is more usefull lmao" postImg="https://images.unsplash.com/photo-1571868094976-6af3b50b43bc?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </>
  )
}
