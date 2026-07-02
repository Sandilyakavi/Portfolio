import React, { useEffect, useRef, useState } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let matrixLines = [];
    const particleCount = 40;
    const matrixLineCount = 12;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle class definition
    class Particle {
      constructor() {
        this.reset();
        // Distribute initially
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = Math.random() * 0.5 + 0.2;
        this.radius = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Wrap around margins
        if (this.x < 0 || this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Matrix line class definition
    class MatrixLine {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -100;
        this.speed = Math.random() * 2 + 1;
        this.length = Math.random() * 80 + 40;
        this.alpha = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.x, this.y - this.length, 
          this.x, this.y
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.7, `rgba(6, 182, 212, ${this.alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${this.alpha})`); // Cyan/purple transition
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
      }
    }

    // Initialize particles and matrix lines
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    for (let i = 0; i < matrixLineCount; i++) {
      matrixLines.push(new MatrixLine());
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw faint connections between nearby particles (Constellation grid)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.1;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Update & Draw matrix rain
      matrixLines.forEach(l => {
        l.update();
        l.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.06] pointer-events-none" />

      {/* Canvas for Particles & Matrix Lines */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block pointer-events-none opacity-80"
      />

      {/* Dynamic Cursor Light Effect */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />

      {/* Static Ambient Radial Background Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] radial-glow-cyan opacity-40" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] radial-glow-purple opacity-30" />
      <div className="absolute top-[40%] right-[15%] w-[40%] h-[40%] radial-glow-blue opacity-25" />
    </div>
  );
}
