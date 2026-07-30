"use client"
import React from "react";
import { useRouter } from "next/navigation";


const page = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const router=useRouter();

    function validate(){
        let err={};
        if(!formData.email){
            err.email="Email is required";
        }
        if(!formData.password){
            err.password="Password is required";
        }
        else if(formData.password.length<6){
            err.password="Password must be at least 6 characters long";
        }
        return err;
    }

  const submitHandler =async (e) => {
    e.preventDefault();
  
    let err= validate();

    if(Object.keys(err).length>0){
        console.log("Validation errors:", err);
        return
    }

    const res= await fetch("/api/products/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })

    if(res.ok){
        router.push("/app/products/page");
        router.refresh();
    }
    else{
        alert("Invalid credentials");
    }
    console.log("Form Data:", formData);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Username:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default page;
