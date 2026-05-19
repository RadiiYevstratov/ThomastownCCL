import { Outlet, useLocation } from "react-router";
import { useLayoutEffect, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

function ScrollToTop() {
  const { key, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) return;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [key]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
