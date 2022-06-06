import React from "react";
import Input from "./Input";

export default function SignIn() {

    const handleFormSubmit = event => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        alert("Username: " + username + " Password: " + password);
    }
  return (
    <form
        onSubmit={handleFormSubmit}
      className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-300
    p-4
    "
    >
      <h1 className="text-3xl font-bold text-center m-2">SignIn</h1>
      <Input id="username" name="Username" />
      <Input id="password" name="Password" />
        <div className="text-center">
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-2xl text-lg">Send</button>
        </div>
    </form>
  );
}
