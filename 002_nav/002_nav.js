// 002_nav/002_nav.js
document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
    <header class="navbar" style="position: sticky; top: 0; display: flex; justify-content: space-between; padding: 20px 40px; z-index: 2000; backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.05);">
        <a href="../003_index/003_index.html" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 20px;">🛡️ AEGIS TITAN</a>
        <nav style="display: flex; gap: 30px;">
            <a href="../003_index/003_index.html" style="color: #d2d0dd; text-decoration: none; font-size: 15px;">Index</a>
            <a href="../004_pricing/004_pricing.html" style="color: #d2d0dd; text-decoration: none; font-size: 15px;">Pricing</a>
            <a href="../005_contact/005_contact.html" style="color: #d2d0dd; text-decoration: none; font-size: 15px;">Contact</a>
        </nav>
    </header>
    `;
    // 将导航栏自动注入到网页最顶部
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
