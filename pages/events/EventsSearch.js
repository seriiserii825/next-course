import React from "react";
import classes from "./events-search.module.css";
import Button from "../../components/Button/Button";
import { useImmer } from "use-immer";
import { useRouter } from "next/router";

function EventsSearch() {
  const router = useRouter();

  const [state, setState] = useImmer({
    year: "2021",
    month: "1"
  });

  function yearHandler(e) {
    setState((draft) => {
      draft.year = e.target.value;
    });
  }

  function monthHandler(e) {
    setState((draft) => {
      draft.month = e.target.value;
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    router.push(`/events/${state.year}/${state.month}`);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"> Year </label>{" "}
          <select id="year" value={state.year} onChange={yearHandler}>
            <option value="2021"> 2021 </option>{" "}
            <option value="2022"> 2022 </option>{" "}
          </select>{" "}
        </div>{" "}
        <div className={classes.control}>
          <label htmlFor="month"> Month </label>{" "}
          <select id="month" value={state.month} onChange={monthHandler}>
            <option value="1"> January </option>{" "}
            <option value="2"> February </option>{" "}
            <option value="3"> March </option>{" "}
            <option value="4"> April </option> <option value="5"> May </option>{" "}
            <option value="6"> June </option> <option value="7"> July </option>{" "}
            <option value="8"> August </option>{" "}
            <option value="9"> September </option>{" "}
            <option value="10"> October </option>{" "}
            <option value="11"> November </option>{" "}
            <option value="12"> December </option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <Button type="submit"> Find Events </Button>{" "}
    </form>
  );
}

export default EventsSearch;
