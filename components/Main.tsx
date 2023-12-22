import { useState } from "react";
import { HeroSection } from ".";
import { toast } from "react-toastify";

function Main() {
  const [searchAccount, setSearchAccount] = useState("");

  console.log(searchAccount);

  async function searchForUser() {
    const data = {
      user: searchAccount,
    };

    const res = await fetch("/api/fetch-user", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      toast.success("Something Happened", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <div className="">
      <HeroSection setSearchAccount={setSearchAccount} />
      <button type="button" className="border p-3" onClick={searchForUser}>
        Search
      </button>
    </div>
  );
}

export default Main;
