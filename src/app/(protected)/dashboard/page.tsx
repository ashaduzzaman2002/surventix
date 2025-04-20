"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuthStore } from "@/store/authStore";

const Page = () => {
  const { user, setUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        });
      } else {
        setUser(null);
        router.replace("/signin"); // redirect if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [setUser, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user from the store after logout
      router.push("/signin"); // Redirect to signin page
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  

  if (!user) {
    return null; // Avoid flash of "No user logged in" before redirect
  }

  return (
    <div>
      <h1 className="text-xl font-bold">User Info</h1>
      <div className="mt-4">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-[#003B64] text-white h-11 rounded-lg mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
