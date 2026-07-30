"use client";

import { useRouter } from "next/navigation";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ isLogged }) => {
  const router = useRouter();
  const onLogoutHandler = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/products/logout", {
      method: "POST",
    });
    if (res.ok) {
      router.push("/app/login");
      router.refresh();
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
      <h1>My App {isLogged}</h1>
      <div>
      {isLogged && (<>  <button style={{ marginRight: "1rem" }}>
          <Link href="/">Home</Link>
        </button>
        <button style={{ marginRight: "1rem" }}>
          <Link href="/app/products/page">Products</Link>
        </button></>)}
        { isLogged ? <button onClick={onLogoutHandler}>Logout</button> : <button><Link href="/app/login">Login</Link></button> }
        
      </div>
    </header>
  );
};

export default Header;
