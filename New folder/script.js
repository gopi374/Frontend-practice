const state = {
  paymentConfirmed: false,
};

function setActiveScreen(screenId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const screen = document.getElementById(screenId);
  if (screen) screen.classList.add("active");
}

function enterRole(role) {
  setActiveScreen(`screen-${role}`);
  if (role === "admin") {
    adminNav(
      "dashboard",
      document.querySelector("#screen-admin .nav-item.active"),
    );
  } else if (role === "pp") {
    ppNav("dashboard", document.querySelector("#screen-pp .nav-item.active"));
  }
}

function goHome() {
  setActiveScreen("screen-landing");
}

function adminNav(panel, el) {
  const screen = document.getElementById("screen-admin");
  screen
    .querySelectorAll(".sidebar-nav .nav-item")
    .forEach((item) => item.classList.remove("active"));
  if (el) el.classList.add("active");
  const panels = screen.querySelectorAll(".dash-panel");
  panels.forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(`admin-${panel}`);
  if (target) target.classList.add("active");

  const titles = {
    dashboard: "Admin Dashboard",
    users: "User Management",
    rbac: "RBAC Matrix",
    templates: "Gist Templates",
    sectors: "Sector Parameters",
    audit: "Event Audit Log",
  };
  document.getElementById("admin-top-title").textContent =
    titles[panel] || "Admin Portal";
}

function ppNav(panel, el) {
  const screen = document.getElementById("screen-pp");
  screen
    .querySelectorAll(".sidebar-nav .nav-item")
    .forEach((item) => item.classList.remove("active"));
  if (el) el.classList.add("active");
  const panels = screen.querySelectorAll(".dash-panel");
  panels.forEach((p) => p.classList.remove("active"));
  const target = document.getElementById(`pp-${panel}`);
  if (target) target.classList.add("active");

  const titles = {
    dashboard: "My Dashboard",
    newapp: "New Application",
    myapps: "My Applications",
    eds: "EDS Responses",
    payment: "Fee Payment",
  };
  document.getElementById("pp-top-title").textContent =
    titles[panel] || "Proponent Portal";
}

function nextStep(current) {
  const next = current + 1;
  const currentEl = document.getElementById(`newapp-step${current}`);
  const nextEl = document.getElementById(`newapp-step${next}`);
  if (!nextEl) return;
  currentEl.style.display = "none";
  nextEl.style.display = "block";
  updateWizardCircles(next);
}

function prevStep(current) {
  const prev = current - 1;
  const currentEl = document.getElementById(`newapp-step${current}`);
  const prevEl = document.getElementById(`newapp-step${prev}`);
  if (!prevEl) return;
  currentEl.style.display = "none";
  prevEl.style.display = "block";
  updateWizardCircles(prev);
}

function updateWizardCircles(activeStep) {
  for (let i = 1; i <= 5; i++) {
    const circle = document.getElementById(`ns${i}`);
    if (!circle) continue;
    circle.classList.remove("active", "done", "pend");
    if (i < activeStep) circle.classList.add("done");
    else if (i === activeStep) circle.classList.add("active");
    else circle.classList.add("pend");
  }
}

function switchPayTab(tab) {
  ["upi", "netbank", "card"].forEach((t) => {
    document.getElementById(`tab-${t}`).classList.toggle("active", t === tab);
    const panel = document.getElementById(`pay-${t}`);
    if (panel) panel.style.display = t === tab ? "block" : "none";
  });
}

function simulatePayment(fromPaymentPage = false) {
  state.paymentConfirmed = true;
  const statusBox = document.getElementById("payment-status-box");
  if (statusBox) {
    statusBox.innerHTML = `<div class="card" style="text-align:center;padding:28px"><div style="font-size:44px;margin-bottom:10px">✅</div><p style="font-size:13px;color:var(--ink-soft)">Payment successfully confirmed. You may now submit your application.</p></div>`;
  }
  const payStatus = document.getElementById("payment-status");
  if (payStatus) payStatus.textContent = "Confirmed";
  if (fromPaymentPage) {
    alert(
      "Payment has been confirmed. You can now go to New Application and submit.",
    );
  }
}

function submitApplication() {
  if (!state.paymentConfirmed) {
    alert("Payment is required before submitting the application.");
    return;
  }
  alert("Application submitted! Redirecting to My Applications...");
  ppNav("myapps", null);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setActiveScreen("screen-landing");
  adminNav(
    "dashboard",
    document.querySelector("#screen-admin .nav-item.active"),
  );
  ppNav("dashboard", document.querySelector("#screen-pp .nav-item.active"));
});
