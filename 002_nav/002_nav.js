// 002_nav/002_nav.js - 极致精简版导航
document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
    <header class="global-navbar" style="position: sticky; top: 0; display: flex; justify-content: space-between; padding: 20px 40px; z-index: 2000; backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(10, 1, 24, 0.7);">
        <a href="../003_index/003_index.html" class="nav-logo" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 20px; letter-spacing: 1px;">🛡️ CHUANIS</a>
        
        <nav class="nav-center" style="display: flex; gap: 40px;">
            <a href="../005_contact/005_contact.html" data-page="contact" style="color: #d2d0dd; text-decoration: none; font-size: 15px; font-weight: 500;">Contact</a>
        </nav>
        
        <div class="nav-right" style="display: flex; gap: 24px; align-items: center;">
            <a href="https://github.com/chuanis" target="_blank" class="nav-btn-signup" style="color: #fff; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 24px; border-radius: 999px; text-decoration: none; font-size: 14px;">GitHub</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 高亮逻辑（如果你以后增加了页面，这里会自动让当前页变紫）
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-center a');
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        if (currentPath.includes(pageName)) {
            link.style.color = "#887dff"; // 强制高亮电光紫
        }
    });
});
