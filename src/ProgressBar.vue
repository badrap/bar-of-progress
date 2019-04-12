<template>
  <inner v-show="key !== 0" :key="key" :finished="finished" />
</template>

<style>
.progress-bar {
  position: fixed;
  height: 2px;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  background: red;
  z-index: 9999;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
}

.progress-bar.stopped {
  opacity: 0;
  width: 0%;
}

.progress-bar.started {
  width: 99%;
  opacity: 1;
  transition: width 10s cubic-bezier(0.1, 0.05, 0, 1);
}

.progress-bar.finished {
  opacity: 0;
  width: 100%;
  transition: width 0.1s ease-out, opacity 0.5s ease 0.2s;
}
</style>

<script>
const Inner = {
  props: ["finished"],

  data() {
    return {
      stateClass: "stopped"
    };
  },

  created() {
    this._timeout = null;
    this._stateClass = this.stateClass;
    this._set = stateClass => {
      this._stateClass = stateClass;
      if (this._timeout === null) {
        this._timeout = setTimeout(() => {
          this._timeout = null;
          this.stateClass = this._stateClass;
        }, 80);
      }
    };
    this._set(this.finished ? "finished" : "started");
  },

  watch: {
    finished(finished) {
      this._set(finished ? "finished" : "started");
    }
  },

  destroyed() {
    if (this._timeout !== null) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
  },

  render(h) {
    return h("div", {
      class: {
        "progress-bar": true,
        [this.stateClass]: true
      }
    });
  }
};

export default {
  data() {
    return {
      key: 0,
      finished: false
    };
  },

  methods: {
    start() {
      this.key += 1;
      this.finished = false;
    },
    finish() {
      this.finished = true;
    }
  },

  components: {
    Inner
  }
};
</script>
