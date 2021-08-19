import React from "react";
import { useImmer } from "use-immer";
import { useRouter } from "next/router";

function AddFeedback() {
  const router = useRouter();
  const [state, setState] = useImmer({
    user: "",
    email: "",
    feedback: []
  });

  function userHandler(e) {
    setState((draft) => {
      draft.user = e.target.value;
    });
  }

  function emailHandler(e) {
    setState((draft) => {
      draft.email = e.target.value;
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (state.user === "" || state.email === "") {
      return false;
    }
    const formData = {
      id: +new Date(),
      user: state.user,
      email: state.email
    };

    await fetch("/api/hello", {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
      method: "POST"
    });
    setState((draft) => {
      draft.user = "";
      draft.email = "";
    });
    router.push("/feedback");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        value={state.user}
        onChange={userHandler}
        type="text"
        name="user"
        placeholder="User"
      />
      <input
        value={state.email}
        onChange={emailHandler}
        type="email"
        name="email"
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddFeedback;
