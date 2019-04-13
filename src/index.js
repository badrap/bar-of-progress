const asPx = value => {
  return typeof value === "number" ? value + "px" : value;
};

const assign = (to, from) => {
  Object.keys(from || {}).forEach(key => {
    to[key] = from[key];
  });
  return to;
};

export default function(_config) {
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
    height: asPx(config.size || 0),
    top: "0",
    left: "0",
    margin: "0",
    padding: "0",
    border: "none",
    borderRadius: "0",
    backgroundColor: config.color,
    zIndex: "9999",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.7)"
  };

  const stateStyles = {
    stopped: {
      opacity: "0",
      width: "0%"
    },
    started: {
      width: "99%",
      opacity: "1",
      transition: "width 10s cubic-bezier(0.1, 0.05, 0, 1)"
    },
    finished: {
      opacity: "0",
      width: "100%",
      transition: "width 0.1s ease-out, opacity 0.5s ease 0.2s"
    }
  };

  let current = null;
  let timeout = null;

  const setState = state => {
    current.classList.add(config.className);
    current.classList.add(state);
    assign(assign(current.style, baseStyle), stateStyles[state]);
  };

  this.start = () => {
    if (current && current.parentNode) {
      current.parentNode.removeElement(current);
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
      setState(current, "finished");
    }
  };
}
