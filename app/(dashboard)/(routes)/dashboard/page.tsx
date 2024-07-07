import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Authorized Route
      <UserButton afterSwitchSessionUrl="/" />
      
    </div>
  );
}
