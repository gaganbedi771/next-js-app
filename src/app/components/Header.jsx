"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const onLogoutHandler = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/logout", {
      method: "POST",
    });
    if (res.ok) {
      router.push("/app/login/page");
    } else {
      alert("Logout failed");
    }
  };
  
  return (
    <header
      style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <h1>My App</h1>
      <div>
        <button style={{ marginRight: "1rem" }}>
          <Link href="/">Home</Link>
        </button>
        <button style={{ marginRight: "1rem" }}>
          <Link href="/app/products/page">Products</Link>
        </button>
        <button onClick={onLogoutHandler}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
