// 002_nav/002_nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {
    
    // 导航栏骨架：去除 AEGIS 标识，仅保留核心品牌 CHUANIS
    const navHTML = `
    <header class="global-navbar" style="position: sticky; top: 0; display: flex; justify-content: space-between; padding: 20px 40px; z-index: 2000; backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(10, 1, 24, 0.7);">
        <a href="../003_index/003_index.html" class="nav-logo" style="color: #fff; font-weight: bold; text-decoration: none; font-size: 20px; letter-spacing: 2px;">CHUANIS</a>
        
        <nav class="nav-center" style="display: flex; gap: 40px;">
            <a href="../003_index/003_index.html" data-page="index" style="color: #d2d0dd; text-decoration: none; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">INNOVATION</a>
            <a href="../006_portfolio/portfolio.html" data-page="portfolio" style="color: #d2d0dd; text-decoration: none; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">PORTFOLIO</a>
            <a href="../007_blueprints/blueprints.html" data-page="blueprints" style="color: #d2d0dd; text-decoration: none; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">BLUEPRINTS</a>
            <a href="../005_contact/005_contact.html" data-page="contact" style="color: #d2d0dd; text-decoration: none; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">CONTACT</a>
        </nav>
        
        <div class="nav-right" style="display: flex; gap: 24px; align-items: center;">
            <a href="https://github.com/chuanis" target="_blank" style="color: #fff; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); padding: 8px 24px; border-radius: 999px; text-decoration: none; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">GITHUB</a>
        </div>
    </header>
    `;

    // 注入导航栏
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 智能高亮：当前页标题转紫
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-center a');
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        if (currentPath.includes(pageName)) {
            link.style.color = "#887dff"; // 电光紫高亮
            link.style.textShadow = "0 0 10px rgba(136, 125, 255, 0.6)";
        }
    });
});
