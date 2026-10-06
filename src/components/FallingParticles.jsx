import React, { useEffect, useRef } from "react";

export default function FallingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = 50; // عدد الجسيمات
    
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 60 + 25, // زيادة طول الذيل مع السرعة
      
      // ⚡ تم زيادة السرعة هنا (تتراوح الآن بين 2.5 و 6 بدل القديمة)
      speed: Math.random() * 3.5 + 2.5, 
      
      opacity: Math.random() * 0.7 + 0.3,
      size: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 1. رسم ذيل النجمة المتساقطة
        const gradient = ctx.createLinearGradient(p.x, p.y - p.length, p.x, p.y);
        gradient.addColorStop(0, "rgba(168, 85, 247, 0)");
        gradient.addColorStop(0.7, `rgba(168, 85, 247, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(192, 132, 252, ${p.opacity})`);

        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.length);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = p.size;
        ctx.lineCap = "round";
        ctx.stroke();

        // 2. رسم رأس النجمة المضيء
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#c084fc";
        ctx.fill();

        ctx.shadowBlur = 0;

        // 3. تحريك الجسيم للأسفل
        p.y += p.speed;

        // إعادة النجمة للأعلى بنفس السرعة العالية
        if (p.y - p.length > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
          
          // ⚡ سرعة النجم عند إعادته للأعلى
          p.speed = Math.random() * 3.5 + 2.5; 
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}