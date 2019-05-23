const Toast = {};
Toast.install = function(Vue, options) {
  let TOAST_ID = 0;
  let TOAST_LIST = [];
  let tplIntance;
  let opt = {
    type: "primary",
    duration: "1500" // 持续时间
  };

  Object.assign(opt, options);

  if (!tplIntance) {
    const wrapperTpl = Vue.extend({
      data() {
        return {
          notices: TOAST_LIST
        };
      },
      methods: {
        clear() {
          TOAST_LIST = [];
          this.notices = TOAST_LIST;
        }
      },
      template: `<div id="toast-plugin-wrapper">
                    <transition-group name="fade">
                      <div v-for="item in notices" :key="item.id" :style="{zIndex:item.id + 1000}" :class="['alert-main', item.type]">
                        <div class="alert-content">
                          <span v-if="item.icon" :class="[item.icon, 'iconfont']"></span>
                          {{ item.content }}
                        </div>
                      </div>
                    </transition-group>
                   </div>`
    });
    tplIntance = new wrapperTpl().$mount();
    const tpl = tplIntance.$el;
    document.body.appendChild(tpl);
  }

  Vue.prototype.$toast = (tips, { type, duration } = opt) => {
    let icon;
    switch (type) {
      case "success":
        icon = "icon-okl";
        break;
      case "danger":
        icon = "icon-close";
        break;
      case "info":
        icon = "icon-info";
        break;
      case "loading":
        icon = "icon-loading";
        break;
      default:
        icon = "";
        break;
    }
    TOAST_LIST.unshift({
      content: tips,
      id: ++TOAST_ID,
      type,
      icon
    });

    function remove(id) {
      setTimeout(function() {
        for (let i = 0; i < TOAST_LIST.length; i++) {
          if (TOAST_LIST[i].id === id) {
            TOAST_LIST.splice(i, 1);
            break;
          }
        }
      }, duration);
    }

    duration && remove(TOAST_ID);

  };

  ["success", "primary", "warining", "danger", "info", 'loading'].forEach(type => {
    Vue.prototype.$toast[type] = (tips, duration = opt.duration) => {
      return Vue.prototype.$toast(tips, { type, duration });
    };
  });

  Vue.prototype.$toast.clear = () => {
    tplIntance.clear();
  };
};
export default Toast;
