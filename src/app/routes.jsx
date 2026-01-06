import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import BorrowerSearch from "../pages/borrowers/BorrowerSearch";
import CreditReport from "../pages/credit-report/CreditReport";
import BankAnalysis from "../pages/bank-analysis/BankAnalysis";
import IncomeVerification from "../pages/income-verification/IncomeVerification";
import RiskSummary from "../pages/risk-summary/RiskSummary";
import PolicyList from "../pages/policies/PolicyList";
import CreditDecision from "../pages/decisions/CreditDecision";
import AuditTrail from "../pages/audit-trail/AuditTrail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/borrowers" element={<BorrowerSearch />} />
      <Route path="/credit-report" element={<CreditReport />} />
      <Route path="/bank-analysis" element={<BankAnalysis />} />
      <Route path="/income-verification" element={<IncomeVerification />} />
      <Route path="/risk-summary" element={<RiskSummary />} />
      <Route path="/policies" element={<PolicyList />} />
      <Route path="/decision" element={<CreditDecision />} />
      <Route path="/audit" element={<AuditTrail />} />
    </Routes>
  );
}

