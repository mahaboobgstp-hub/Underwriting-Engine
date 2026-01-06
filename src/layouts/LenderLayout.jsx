import Sidebar from "./Sidebar";

export default function LenderLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "24px", background: "#f8fafc" }}>
        {children}
      </main>
    </div>
  );
}

