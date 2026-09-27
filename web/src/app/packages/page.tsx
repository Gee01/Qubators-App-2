import Link from "next/link";

export default function Packages() {
  return (
    <main style={{ minHeight: "100vh", background: "#F1F5F9", color: "#020617", padding: 32, fontFamily: "Segoe UI, system-ui, sans-serif" }}>
      <h1>Packages</h1>
      <p style={{ color: "#334155" }}>Package browsing lands here in Phase 1 (Issue #5). Coming soon.</p>
      <Link href="/">Back home</Link>
    </main>
  );
}
