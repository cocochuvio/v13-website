// assets/nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 智能判断当前页面的层级深度
    const currentPath = window.location.pathname.toLowerCase();
    const isDeepFolder = currentPath.includes('/portfolio/');
    
    // 如果在深层，前缀就加 ../../；否则就用 ./
    const prefix = isDeepFolder ? '../../' : './';

    // 2. 导航栏骨架：字体大小已提升至 18px
    const navHTML = `
    <header class="global-navbar">
        <style>
            .nav-center a { font-size: 18px !important; }
            .nav-btn-signup { font-size: 18px !important; }
        </style>
        <a href="${prefix}index.html" class="nav-logo">CHUANIS</a>
        <nav class="nav-center">
            <a href="${prefix}index.html" data-page="index">INNOVATION</a>
            <a href="${prefix}portfolio.html" data-page="portfolio">PORTFOLIO</a>
            <a href="${prefix}blueprints/index.html" data-page="blueprints">BLUEPRINTS</a>
            <a href="${prefix}Contact.html" data-page="contact">CONTACT</a>
        </nav>
        <div class="nav-right">
            <a href="https://github.com/chuanis" target="_blank" class="nav-btn-signup">GITHUB</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 3. 智能高亮逻辑
    const navLinks = document.querySelectorAll('.nav-center a');
    
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        link.classList.remove('active');

        if (pageName === 'index' && (currentPath === '/' || currentPath.endsWith('index.html') && !isDeepFolder)) {
            link.classList.add('active');
        } else if (pageName === 'portfolio' && currentPath.includes('portfolio.html')) {
            link.classList.add('active');
        } else if (pageName === 'blueprints' && currentPath.includes('/blueprints/')) {
            link.classList.add('active');
        } else if (pageName === 'contact' && currentPath.includes('contact.html')) {
            link.classList.add('active');
        }
    });

    // 4. 暴力修复说明书页面的高亮：在详情页只让 PORTFOLIO 亮
    if (isDeepFolder) {
        document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
        const pBtn = document.querySelector('.nav-center a[data-page="portfolio"]');
        if (pBtn) pBtn.classList.add('active');
    }
});
