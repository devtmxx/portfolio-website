import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="mx-auto text-[30vmin] font-black text-slate-200 text-center">
        404
      </h1>
      <p className="mx-auto text-3xl font-medium text-slate-200 text-center">
        Whoops, we couldn&apos;t find that page.
      </p>
      <Link
        href="/public"
        className="border-3 mt-8 rounded border-slate-900 bg-slate-50 px-8 py-4 text-2xl font-medium text-slate-900 text-center"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
