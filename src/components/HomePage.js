import Link from "@mui/material/Link";

export default function HomePage() {
  return (
    <>
      <p>
        Welcome to my API Demo, please select an item above from the navigation
        bar to try out an exercise :)
      </p>
      <small>
        Special thanks to{" "}
        <Link href="https://codesandbox.io/u/kvnglvz" target="_blank">
          @kvnglvz
        </Link>{" "}
        for these brain teasers!
      </small>
    </>
  );
}
