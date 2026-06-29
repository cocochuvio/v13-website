// 002_nav/002_nav.js - 导航栏动态注入与智能路由

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 极其纯净的 HTML 骨架（去掉了所有恶心的内联 style，全靠上面的 CSS 控制）
    // 注意：给每个链接加了一个 data-page 属性，用来做身份识别
    const navHTML = `
    <header class="global-navbar">
        <a href="../003_index/index.html" class="nav-logo">🛡️ AEGIS TITAN</a>
        
        <nav class="nav-center">
            <a href="../003_index/index.html" data-page="index">Index</a>
            <a href="../004_pricing/pricing.html" data-page="pricing">Pricing</a>
            <a href="../005_contact/contact.html" data-page="contact">Contact Us</a>
        </nav>
        
        <div class="nav-right">
            <a href="#" class="nav-btn-login">Log in</a>
            <a href="https://github.com/LucasAegis" target="_blank" class="nav-btn-signup">GitHub</a>
        </div>
    </header>
    `;

    // 2. 将导航栏自动注入到网页最顶部
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 3. 🎯 智能路由高亮逻辑：谁是当前页，谁就亮电光紫！
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-center a');
    
    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');
        // 只要浏览器的地址栏里包含了这个页面的名字（比如包含 index 或 pricing）
        if (currentPath.includes(pageName)) {
            link.classList.add('active'); // 给它挂上 active 类名，CSS 就会让它爆闪紫光
        }
    });
});
