// assets/nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {
    
    // 导航栏骨架：链接地址已适配根目录结构
    const navHTML = `
   <header class="global-navbar">
    <a href="/index.html" class="nav-logo">CHUANIS</a>
    
    <nav class="nav-center">
        <a href="/index.html" data-page="index">INNOVATION</a>
        <a href="/portfolio.html" data-page="portfolio">PORTFOLIO</a>
        <a href="/portfolio/Stealth/index.html" data-page="blueprints">BLUEPRINTS</a>
        <a href="/Contact.html" data-page="contact">CONTACT</a>
    </nav>
    
    <div class="nav-right">
        <a href="https://github.com/chuanis" target="_blank" class="nav-btn-signup">GITHUB</a>
    </div>
</header>
    `;

    // 注入导航栏
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 智能高亮：当前页导航项变更为电光紫
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-center a');
    
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        // 逻辑：如果当前路径包含对应页面标识，则高亮
        if (pageName && currentPath.includes(pageName)) {
            link.classList.add('active');
        }
        // 特殊处理：如果是首页且处于根目录
        if (pageName === 'index' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });
});
