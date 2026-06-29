// assets/nav.js - CHUANIS 全局导航组件
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 智能判断当前页面的层级深度
    const currentPath = window.location.pathname.toLowerCase();
    // 如果路径里包含 '/portfolio/' 并且包含 'index.html'，说明我们在说明书等深层页面
    const isDeepFolder = currentPath.includes('/portfolio/') && currentPath.includes('index.html');
    
    // 如果在深层，前缀就加 ../../ 回到根目录；否则就用 ./ 留在当前目录
    const prefix = isDeepFolder ? '../../' : './';

    // 2. 导航栏骨架：使用动态前缀 ${prefix}，完美兼容本地双击和服务器部署，且修复了 Contact.html 的大写 C
    const navHTML = `
    <header class="global-navbar">
        <a href="${prefix}index.html" class="nav-logo">CHUANIS</a>
        <nav class="nav-center">
            <a href="${prefix}index.html" data-page="index">INNOVATION</a>
            <a href="${prefix}portfolio.html" data-page="portfolio">PORTFOLIO</a>
            <a href="${prefix}portfolio/safelink/index.html" data-page="blueprints">BLUEPRINTS</a>
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
        } else if (pageName === 'contact' && currentPath.includes('contact.html')) {
            link.classList.add('active');
        }
    });

    // 4. 暴力修复说明书页面的高亮：
    // 如果我们在说明书页面，强制清空所有高亮，只让 PORTFOLIO 亮起来！
    if (isDeepFolder) {
        document.querySelectorAll('.nav-center a').forEach(a => a.classList.remove('active'));
        document.querySelector('.nav-center a[data-page="portfolio"]').classList.add('active');
    }
});
