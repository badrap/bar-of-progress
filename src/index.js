export default function(_config) {
  const assign = (to, from) => {
    Object.keys(from || {}).forEach(key => {
      to[key] = from[key];
    });
    return to;
  };

  const config = assign(
    {
      size: 2,
      color: "red",
      className: "bar-of-progress",
      delay: 80
    },
    _config
  );

  const baseStyle = {
    position: "fixed",
    height: typeof config.size === "number" ? config.size + "px" : config.size,
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: config.color,
    zIndex: 9999,
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.7)"
  };

  const stateStyles = {
    stopped: {
      opacity: 0,
      width: "0%"
    },
    started: {
      opacity: 1,
      width: "99%",
      transition: "width 10s cubic-bezier(0.1, 0.05, 0, 1)"
    },
    finished: {
      opacity: 0,
      width: "100%",
      transition: "width 0.1s ease-out, opacity 0.5s ease 0.2s"
    }
  };

  let current = null;
  let timeout = null;

  const setState = state => {
    current.className = config.className + " " + state;
    assign(assign(current.style, baseStyle), stateStyles[state]);
  };

  this.start = () => {
    if (current && current.parentNode) {
      current.parentNode.removeChild(current);
    }
    current = document.createElement("div");
    setState("stopped");
    document.body.appendChild(current);

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      setState("started");
    }, config.delay);
  };

  this.finish = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (current) {
      setState("finished");
    }
  };
}
