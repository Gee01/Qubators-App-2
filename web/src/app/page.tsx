import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F1F5F9",
        color: "#020617",
        fontFamily: "Segoe UI, system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "2px solid #94A3B8",
          borderRadius: 12,
          padding: 32,
          maxWidth: 560,
          width: "100%",
        }}
      >
        <h1 style={{ margin: "0 0 8px", fontSize: 32 }}>
          Plan your event
        </h1>
        <p style={{ margin: "0 0 20px", color: "#334155" }}>
          One place to request, plan, price, pay for, and track your
          event — weddings, birthdays, conferences and more.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/packages"
            style={{
              background: "#312E81",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Browse Packages
          </Link>
          <Link
            href="/request"
            style={{
              background: "#fff",
              color: "#1E1B4B",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              border: "3px solid #1E1B4B",
            }}
          >
            Start a Request
          </Link>
        </div>
      </div>
    </main>
  );
}
