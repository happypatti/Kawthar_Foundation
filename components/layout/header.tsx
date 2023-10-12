import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import NavBar from "./nav-bar";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return <NavBar session={session} />;
}
