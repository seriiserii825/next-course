import React from "react";
import { getFileData, getFilePath } from "../helpers/feedback";

function Feedback({ feedback }) {
  console.log(feedback, "feedback");
  return (
    <ul>
      {feedback &&
        feedback.length &&
        feedback.map(({ email, user, id }) => (
          <li key={id}>
            <span>{user}</span>
            <strong> ({email})</strong>
          </li>
        ))}
    </ul>
  );
}

export default Feedback;

export async function getServerSideProps() {
  const filePath = getFilePath();
  const data = getFileData(filePath);
  return {
    props: {
      feedback: data
    }
  };
}
