import { NavLink } from "react-router-dom";

const menu = [
  { path: "/", label: "Dashboard" },
  { path: "/borrowers", label: "Borrower Search" },
  { path: "/credit-report", label: "Credit Report" },
  { path: "/bank-analysis", label: "Bank Analysis" },
  { path: "/income-verification", label: "Income Verification" },
  { path: "/risk-summary", label: "Risk Summary" },
  { path: "/policies", label: "Policies" },
  { path: "/decision", label: "Decision" },
  { path: "/audit", label: "Audit Trail" }
];

export default function Sidebar() {
  return (
    <aside style={{ width: 260, background: "#020617", color: "#fff", padding: 20 }}>
      <h2 style={{ marginBottom: 24 }}>MendCredit Lender</h2>

      <nav>
        {menu.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "block",
              padding: "10px 0",
              color: isActive ? "#22c55e" : "#e5e7eb",
              textDecoration: "none",
              fontWeight: isActive ? 600 : 400
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

