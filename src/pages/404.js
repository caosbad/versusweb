import * as React from "react";
import { Link } from "gatsby";

import Logo from "../assets/vslogo.svg";

// markup
const NotFoundPage = () => {
  return (
    <main className="my-24 container mx-auto text-center">
      <title>Not found</title>
      <Link className="cursor-pointer" to="/">
        <Logo className="h-12 mb-8 mx-auto" />
      </Link>
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-xl mt-12">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link className="underline cursor-pointer" to="/">
          Return to home page
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
