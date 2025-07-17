import { useEffect } from "react";

const MatrixRain = ({ side }) => {
  useEffect(() => {
    const canvas = document.getElementById(`${side}Matrix`);
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.height = window.innerHeight;
      canvas.width = canvas.offsetWidth;
    };

    resize();
    window.addEventListener("resize", resize);

    const chars = "01";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [side]);

  return (
    <canvas
      id={`${side}Matrix`}
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "50%",
        [side]: 0,
        pointerEvents: "none",
        opacity: 0.1,
        zIndex: -1,
      }}
    />
  );
};

export default MatrixRain;
