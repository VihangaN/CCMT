<template>
  <div id="contain">
    <!-- 1 -->

    <button @click="log">log</button>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(cs) Weights related to the size factor</p>

        <div class="columns is-mobile">
          <div class="column">wkv</div>
          <div class="column">
            <b-field>
              <b-numberinput
                min="0"
                controls-position="compact"
                type="is-info"
                v-model="numbers.cs.wkv"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput
                min="0"
                controls-position="compact"
                type="is-info"
                v-model="numbers.cs.wid"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 2 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(cv) Weights related to the variable factor</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(cm) Weights related to the method factor</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(ci) Weights related to the inheritance factor</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Title</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 6 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Title</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">Title</p>

        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">1</div>
          <div class="column">
            <b-field>
              <b-numberinput min="0" controls-position="compact" type="is-info"></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var weights = require("../assets/Weight.json");
export default {
  name: "weight",
  data() {
    return {
      weight: null,

      numbers: {
        cs: {
          wkv: null,
          wid: null,
          wop: null,
          wnv: null,
          wsl: null
        },
        cv: {
          global: null,
          local: null,
          primitive: null,
          composite: null
        },
        cm: {
          void_return: null,
          primitive_return: null,
          composite_return: null,
          primitive_dt: null,
          composite_dt: null
        },
        ci: {
          by_one_class: null,
          by_two_class: null,
          by_three_class: null,
          by_more_than_three_class: null
        },
        ccp: {
          wr: null,
          wmcms: null,
          wmcmd: null,
          Wmcrms: null,
          Wmcrmd: null,
          Wrmcrms: null,
          Wrmcrmd: null,
          Wrmcms: null,
          Wrmcmd: null,
          Wmrgvs: null,
          Wmrgvd: null,
          Wrmrgvs: null,
          Wrmrgvd: null
        },
        ccs: {
          if_ifelse: null,
          loop: null,
          switch: null,
          case: null
        }
      }
    };
  },
  methods: {
    getWeight() {
      this.weight = weights;
      this.setWeightDefault();
      //   console.log(this.numbers.cs);
    },

    setWeightDefault() {
      //cs
      this.numbers.cs.wkv = this.weight.Cs.Wkw;
      this.numbers.cs.wid = this.weight.Cs.Wid;
      this.numbers.cs.wop = this.weight.Cs.Wop;
      this.numbers.cs.wnv = this.weight.Cs.Wnv;
      this.numbers.cs.wsl = this.weight.Cs.Wsl;

      //cv

      this.numbers.cv.global = this.weight.Cv.Global;
      this.numbers.cv.local = this.weight.Cv.Local;
      this.numbers.cv.primitive = this.weight.Cv.Primitive;
      this.numbers.cv.composite = this.weight.Cv.Composite;

      //cm

      this.numbers.cm.void_return = this.weight.Cm.void_return;
      this.numbers.cm.primitive_return = this.weight.Cm.primitive_return;
      this.numbers.cm.composite_return = this.weight.Cm.composite_return;
      this.numbers.cm.primitive_dt = this.weight.Cm.primitive_data_type;
      this.numbers.cm.composite_dt = this.weight.Cm.composite_data_type;

      //ci

      this.numbers.ci.void_return = this.weight.Cm.void_return;
      this.numbers.ci.primitive_return = this.weight.Cm.primitive_return;
      this.numbers.ci.composite_return = this.weight.Cm.composite_return;
      this.numbers.ci.primitive_dt = this.weight.Cm.primitive_data_type;
      this.numbers.ci.composite_dt = this.weight.Cm.composite_data_type;
    },

    log() {
      console.log(this.numbers.cs, this.numbers.cv);
    }
  },

  created() {
    this.getWeight();
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
#card {
  max-width: 50% !important;
  background-color: cornflowerblue;
}
#contain {
  width: 60%;
}
</style>