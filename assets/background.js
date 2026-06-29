// assets/background.js - 全局高清繁星引擎

// 1. 自动在网页最底层动态创建一个画布 (解耦核心：完全不需要修改 HTML)
const canvas = document.createElement('canvas');
canvas.id = 'star-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width, height;

// 2. 动态调整画布尺寸，并进行【高清屏锐化优化】
function resize() {
    const dpr = window.devicePixelRatio || 1; 
    width = window.innerWidth;
    height = window.innerHeight;
    
    // 放大物理画布，确保在 Retina 等高清屏上星星清晰锐利
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
    // 核心机制：10% 闪烁，90% 常亮
    const isFlashing = Math.random() < 0.1;
    
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2, // 初始亮度
        fadeRate: 0.005 + Math.random() * 0.015, // 闪烁的速度
        isFlashing: isFlashing, // 是否闪烁
        speedY: (Math.random() * 0.05) + 0.02 // 微重力向上漂浮速度
    });
}

// 4. 引擎动画循环
function animate() {
    // 清除画布
    ctx.clearRect(0, 0, width, height); 
    
    stars.forEach(star => {
        // 绘制星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // 闪烁逻辑：仅针对闪烁星星
        if (star.isFlashing) {
            star.alpha -= star.fadeRate;
            if (star.alpha <= 0.1 || star.alpha >= 1) {
                star.fadeRate = -star.fadeRate;
            }
        }
        
        // 漂浮逻辑：缓慢上升
        star.y -= star.speedY;
        
        // 循环再生：出界后回到最下方
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });
    
    requestAnimationFrame(animate);
}

// 点火启动
animate();