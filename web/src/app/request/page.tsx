import Link from "next/link";

export default function RequestPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F1F5F9", color: "#020617", padding: 32, fontFamily: "Segoe UI, system-ui, sans-serif" }}>
      <h1>Start a Request</h1>
      <p style={{ color: "#334155" }}>Custom event request wizard lands here in Phase 2. Coming soon.</p>
      <Link href="/">Back home</Link>
    </main>
  );
}
