import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[9rem] leading-none">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex px-6 py-3 bg-primary text-primary-foreground label">Go home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-16 lg:pt-20"><Outlet /></main>
      <SiteFooter />
    </div>
  ),
  notFoundComponent: NotFound,
});
