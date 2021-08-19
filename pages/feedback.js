import React from "react";
import { getFileData, getFilePath } from "../helpers/feedback";

function Feedback({ feedback }) {
  return (
    <ul>
      {feedback &&
        feedback.length &&
        feedback.map(({ email, user }) => (
          <li key={email}>
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
