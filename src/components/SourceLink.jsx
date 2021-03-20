import React from "react";

export default function SourceLink({ title, link }) {
  return (
    <small>
      the source is: <a href={link}>{title}</a>
    </small>
  );
}
