// assets/nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
    <header class="global-navbar">
        <a href="/index.html" class="nav-logo">CHUANIS</a>
        <nav class="nav-center">
            <a href="/index.html" data-page="index">INNOVATION</a>
            <a href="/portfolio.html" data-page="portfolio">PORTFOLIO</a>
            <a href="/portfolio/safelink/index.html" data-page="blueprints">BLUEPRINTS</a>
            <a href="/contact.html" data-page="contact">CONTACT</a>
        </nav>
        <div class="nav-right">
            <a href="https://github.com/chuanis" target="_blank" class="nav-btn-signup">GITHUB</a>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-center a');
    
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        link.classList.remove('active');

        // 精确高亮逻辑
        if (pageName === 'index' && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            link.classList.add('active');
        } else if (pageName === 'portfolio' && currentPath.includes('/portfolio.html')) {
            link.classList.add('active');
        } else if (pageName === 'blueprints' && currentPath.includes('/portfolio/')) {
            // 说明书页面都在 portfolio 文件夹下，点击它只亮 PORTFOLIO 或 BLUEPRINTS，你按需选
            // 既然在看专利，这里亮 PORTFOLIO 是最逻辑自洽的
            if(pageName === 'portfolio') link.classList.add('active'); 
        } else if (pageName === 'contact' && currentPath.includes('contact.html')) {
            link.classList.add('active');
        }
    });
});
