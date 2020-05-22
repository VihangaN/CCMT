<template>
  <div id="contain">
    <!-- 1 -->

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
          <div class="column">Wid</div>
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
          <div class="column">Wop</div>
          <div class="column">
            <b-field>
              <b-numberinput
                min="0"
                controls-position="compact"
                type="is-info"
                v-model="numbers.cs.wop"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wnp</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cs.wnv"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wnv</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cs.wsl"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- cv -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(cv) Weights related to the variable factor</p>

        <div class="columns is-mobile">
          <div class="column">Global</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cv.global"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Local</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cv.local"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Primitive</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cv.primitive"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Composite</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cv.composite"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- cm -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(cm) Weights related to the method factor</p>

        <div class="columns is-mobile">
          <div class="column">Void return</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cm.void_return"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Primitive return</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cm.primitive_return"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Composite return</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cm.composite_return"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Primitive data type</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cm.primitive_dt"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Composite data type</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.cm.composite_dt"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- ci -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(ci) Weights related to the inheritance factor</p>

        <div class="columns is-mobile">
          <div class="column">by one class</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ci.by_one_class"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">by two classes</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ci.by_two_class"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">by three classes</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ci.by_three_class"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">bu more than three classes</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ci.by_more_than_three_class"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(Ccp) Weights related to the coupling factor</p>

        <div class="columns is-mobile">
          <div class="column">Wr</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.wr"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmcms</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.wmcms"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmcmd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.wmcmd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmcrms</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wmcrms"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmcrmd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wmcrmd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmcrms</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmcrms"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmcrmd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmcrmd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmcms</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmcms"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmcmd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmcmd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmrgvs</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wmrgvs"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wmrgvd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wmrgvd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmrgvs</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmrgvs"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">Wrmrgvd</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccp.Wrmrgvd"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- ccs -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">(Ccs) Weights related to the control structure factor</p>

        <div class="columns is-mobile">
          <div class="column">if / if else</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccs.if_ifelse"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">loop</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccs.loop"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">switch</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccs.switch"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">case</div>
          <div class="column">
            <b-field>
              <b-numberinput
                v-model="numbers.ccs.case"
                min="0"
                controls-position="compact"
                type="is-info"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <!-- button -->

    <div class="tile is-parent">
      <div class="tile is-child box">
        <div class="columns is-mobile">
          <div class="column has-text-centered">
            <b-button @click="setWeight" type="is-info">Save weight</b-button>
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

      this.numbers.ci.by_one_class = this.weight.Ci.by_one_class;
      this.numbers.ci.by_two_class = this.weight.Ci.by_two_class;
      this.numbers.ci.by_three_class = this.weight.Ci.by_three_class;
      this.numbers.ci.by_more_than_three_class = this.weight.Ci.by_more_than_three_class;

      //ccp

      this.numbers.ccp.wr = this.weight.Ccp.Wr;
      this.numbers.ccp.wmcms = this.weight.Ccp.Wmcms;
      this.numbers.ccp.wmcmd = this.weight.Ccp.Wmcmd;
      this.numbers.ccp.Wmcrms = this.weight.Ccp.Wmcrms;
      this.numbers.ccp.Wmcrmd = this.weight.Ccp.Wmcrmd;
      this.numbers.ccp.Wrmcrms = this.weight.Ccp.Wrmcrms;
      this.numbers.ccp.Wrmcrmd = this.weight.Ccp.Wrmcrmd;
      this.numbers.ccp.Wrmcms = this.weight.Ccp.Wrmcms;
      this.numbers.ccp.Wrmcmd = this.weight.Ccp.Wrmcmd;
      this.numbers.ccp.Wmrgvs = this.weight.Ccp.Wmrgvs;
      this.numbers.ccp.Wmrgvd = this.weight.Ccp.Wmrgvd;
      this.numbers.ccp.Wrmrgvs = this.weight.Ccp.Wrmrgvs;
      this.numbers.ccp.Wrmrgvd = this.weight.Ccp.Wrmrgvd;

      //ccs

      this.numbers.ccs.if_ifelse = this.weight.Ccs.if_ifelse;
      this.numbers.ccs.loop = this.weight.Ccs.loop;
      this.numbers.ccs.switch = this.weight.Ccs.switch;
      this.numbers.ccs.case = this.weight.Ccs.case;
    },

    setWeight(){
      localStorage.setItem('number', JSON.stringify(this.numbers));
      window.location.href='/totalComplex';
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