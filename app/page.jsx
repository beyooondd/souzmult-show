import fs from "node:fs";
import path from "node:path";
import Behavior from "./Behavior";

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), "app", "body.html"), "utf8");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Behavior />
    </>
  );
}
