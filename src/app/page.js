'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar/>
      {session ? (
        <div className="flex  gap-4">
          <p className="text-lg">Signed in  {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div className="login">
          <Link href={"/login"}>
        <button onClick={() => signIn("github")} className="butto">Sign In with GitHub</button>
           </Link>
         </div>
      )}
      
    </div>
  );
}

