// shared-header.js
function renderHeader() {
  const userName = localStorage.getItem("userName") || "Guest";
  const role = localStorage.getItem("role") || "-";
  const mobileNo = localStorage.getItem("mobileNo") || "-";

  const headerHTML = `
    <header style="
      background:#1d3557;
      color:white;
      padding:1rem;
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      position: sticky;
    ">
      <div style="font-size:1.2rem; font-weight:bold;">Law Officer's Tenure Monitoring System</div>
      <div style="text-align: right;">
        <button onclick="goHome()" style="margin-right:10px; background:#457b9d; color:white; border:none; padding:6px 12px; border-radius:5px;">🏠 Home</button>
        <span style="margin-right:15px;">👤 ${userName} (${role})</span>
        <span>📱 ${mobileNo}</span>
        <button onclick="logout()" style="margin-left:20px; background:#e63946; color:white; border:none; padding:6px 12px; border-radius:5px;">Logout</button>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function goHome() {
  window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", renderHeader);
