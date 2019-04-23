export default function(config) {
  const assign = (to, from) => {
    Object.keys(from || {}).forEach(key => {
      to[key] = from[key];
    });
    return to;
  };

  config = assign(
    {
      size: 2,
      color: "#29e",
      className: "bar-of-progress",
      delay: 80
    },
    config
  );

  const initialStyle = {
    position: "fixed",
    height: typeof config.size === "number" ? config.size + "px" : config.size,
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    color: config.color,
    backgroundColor: "currentColor",
    zIndex: 9999,
    opacity: 0,
    width: "0%"
  };

  const startedStyle = {
    opacity: 1,
    width: "99%",
    transition: "width 10s cubic-bezier(0.1, 0.05, 0, 1)"
  };

  const finishedStyle = {
    opacity: 0,
    width: "100%",
    transition: "width 0.1s ease-out, opacity 0.5s ease 0.2s"
  };

  const glowStyle = {
    opacity: 0.5,
    boxShadow: "5px 0 8px",
    height: "100%"
  };

  let current = null;
  let timeout = null;

  this.start = () => {
    if (current && current.parentNode) {
      current.parentNode.removeChild(current);
    }
    current = document.createElement("div");
    current.className = config.className + " stopped";
    assign(current.style, initialStyle);
    document.body.appendChild(current);

    const glow = document.createElement("div");
    glow.className = "glow";
    assign(glow.style, glowStyle);
    current.appendChild(glow);

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      current.className = config.className + " started";
      assign(current.style, startedStyle);
    }, config.delay);
  };

  this.finish = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (current) {
      current.className = config.className + " finished";
      assign(current.style, finishedStyle);
    }
  };
}
