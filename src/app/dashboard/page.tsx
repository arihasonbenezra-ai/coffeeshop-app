import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  return (
    <main className="min-h-screen bg-surface p-6">
      <div className="max-w-2xl mx-auto pt-12">
        <p className="text-xs font-medium text-muted uppercase tracking-wider mb-2">
          Dashboard
        </p>
        <h1 className="text-3xl font-medium text-anchor tracking-tight mb-6">
          Welcome, {user?.firstName ?? "there"}
        </h1>
        <div className="bg-card border border-[#DDD4B2] rounded-lg p-6">
          <p className="text-sm text-muted mb-1">Signed in as</p>
          <p className="text-anchor font-medium">{user?.emailAddresses[0]?.emailAddress}</p>
        </div>
      </div>
    </main>
  );
}
