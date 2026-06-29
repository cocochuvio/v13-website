// 001_global_bg.js - 全局高清繁星引擎

// 1. 自动在网页最底层动态创建一个画布 (解耦核心)
const canvas = document.createElement('canvas');
canvas.id = 'star-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width, height;

// 2. 动态调整画布尺寸，并进行【高清屏锐化优化】
function resize() {
    // 获取当前屏幕的像素密度（Mac或高端手机通常是 2 或 3）
    const dpr = window.devicePixelRatio || 1; 
    width = window.innerWidth;
    height = window.innerHeight;
    
    // 放大物理画布，缩小 CSS 显示，让星星边缘极致锐利
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    ctx.scale(dpr, dpr);
}
window.addEventListener('resize', resize);
resize();

// 3. 繁星生成逻辑
const stars = [];
const numStars = 150; // 星星总数

for (let i = 0; i < numStars; i++) {
    // 🎲 核心机制：只允许约 10% 的星星闪烁，剩下的 90% 是常亮的
    const isFlashing = Math.random() < 0.1;
    
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2, // 初始亮度
        fadeRate: 0.005 + Math.random() * 0.015, // 闪烁的速度
        isFlashing: isFlashing, // 是否闪烁标签
        // 🚀 优化：给所有星星加一个极其缓慢的【向上漂浮速度】
        speedY: (Math.random() * 0.05) + 0.02 
    });
}

// 4. 引擎动画循环
function animate() {
    ctx.clearRect(0, 0, width, height); // 清空上一帧
    
    stars.forEach(star => {
        // 画出星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // ✨ 闪烁逻辑：只有带闪烁标签的星星才会改变透明度
        if (star.isFlashing) {
            star.alpha -= star.fadeRate;
            if (star.alpha <= 0.1 || star.alpha >= 1) {
                star.fadeRate = -star.fadeRate;
            }
        }
        
        // 🚀 漂浮逻辑：让星星极其缓慢地往上飘
        star.y -= star.speedY;
        
        // 如果星星飘出了屏幕最上方，让它在屏幕最下方重新随机诞生
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });
    
    requestAnimationFrame(animate); // 60帧无限循环
}

animate(); // 引擎点火
