// 001_global_bg.js - 全局星空引擎

// 1. 自动在网页最底层动态创建一个画布 (解耦的核心：不需要在 HTML 里手动写 <canvas>)
const canvas = document.createElement('canvas');
canvas.id = 'star-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

// 2. 动态调整画布尺寸，铺满屏幕
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// 3. 繁星生成逻辑
const stars = [];
const numStars = 150; // 星星总数

for (let i = 0; i < numStars; i++) {
    // 🎲 核心机制：只允许约 10% 的星星闪烁，剩下的 90% 是常亮的
    const isFlashing = Math.random() < 0.1; // 0.1 就是 10% 的概率
    
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2, // 初始亮度 (0.2 到 1.0 之间)
        fadeRate: 0.005 + Math.random() * 0.015, // 闪烁的速度
        isFlashing: isFlashing // 给这颗星星贴上“是否闪烁”的标签
    });
}

// 4. 引擎动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空上一帧
    
    stars.forEach(star => {
        // 画出星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // ✨ 如果这颗星星被标记为“闪烁”，才改变它的透明度
        if (star.isFlashing) {
            star.alpha -= star.fadeRate;
            // 触底反弹：太暗了就变亮，太亮了就变暗
            if (star.alpha <= 0.1 || star.alpha >= 1) {
                star.fadeRate = -star.fadeRate;
            }
        }
    });
    
    requestAnimationFrame(animate); // 无限循环
}

animate(); // 点火运行