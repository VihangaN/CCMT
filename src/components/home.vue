<template>
    <div>

        <!-- <input type="file" ref="myFile" @change="selectedFile"><br/> -->


        <b-field class="centered">
            <b-upload v-model="files"
                      accept=".java"
                      type="is-info"
                      multiple
                      drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                    icon="upload"
                                    size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your java files here or click to upload</p>
                    </div>
                </section>
            </b-upload>

            <label>{{message}}</label>
        </b-field>

        <div class="tags" id="tags">
            <span v-for="(file, index) in files"
                  :key="index"
                  class="tag is-primary">
                {{file.name}}
                <button class="delete is-small"
                        type="button"
                        @click="deletefile(index)">
                </button>
            </span>
        </div>

        <div id="scan" v-if="files.length > 0">
            <div id="scan" v-if="files.length > 0">
      <b-button type="is-info" icon-left="autorenew" @click="selectedFile">Start Now</b-button>
    </div>
        </div>
        
    </div>

   
<!-- 
    <button @click="exportToPDF"> {{test}}</button> -->

</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {mapState , mapGetters , mapMutations} from 'vuex'
import router from '../router'


export default {

computed:{
    ...mapGetters([
      'getnav',
      'getsub',
      'getfiles'

    ]),
    ...mapState([
      'nav',
      'sub',
      'files'
    ]),
},

  data() {
    return {
      text: "",
      message: "",
      textWithoutComment: "",
      files: [] //  store multiple files
    };
  },
  watch:{
      files: function (n) {
         if(n.length > 0){
        this.setType(true);
        this.setUp(true);
         }
      }
  },
  
  methods: {
      ...mapMutations([
      'setnav',
      'setsub',
      'setfiles'
    ]),
    setType: function(status) {
      this.setnav(status)
  
    },
    setSub: function(status) {
      this.setsub(status)
  
    },
    setUp: function(status) {
      this.setfiles(status)
  
    },

    checkSuccess() {
         
      if (this.files.length > 0) {
           this.setSub(true);
          
        this.$buefy.toast.open({
          duration: 1000,
          message: "Files uploaded successfully !",
          position: "is-bottom-right",
          type: "is-success"
        });
         
      router.push('/totalComplex');
      } else {
        this.$buefy.toast.open({
          duration: 1000,
          message: "Files not uploaded successfully",
          position: "is-bottom-right",
          type: "is-danger"
        });
      }
    },

    exportToPDF() {
      window.html2canvas = html2canvas;

      var doc = new jsPDF("p", "pt", "a4");

    
      var source = document.getElementById("print").innerHTML;

      var margins = {
        top: 10,
        bottom: 10,
        left: 10,
        width: 595
      };

      doc.fromHTML(
        source, 
        margins.left,
        margins.top,
        {
          width: margins.width
        },
         function() {
          
          doc.save("Test.pdf");
        },
        margins
      );
    },
   
            selectedFile() {
                console.log(this.files);
                this.checkSuccess();
                localStorage.clear();
                localStorage.setItem(`fileindex`, this.files.length);
                for (let i = 0; i < this.files.length; i++) {

                    let file = this.files[i];

                    let reader = new FileReader();
                    reader.readAsText(file, "UTF-8");
                    reader.onload = evt => {
                        this.text = evt.target.result;
                        localStorage.setItem(`filedata${i}`, this.text);
                        localStorage.setItem(`filedataNmae${i}`, file.name);
                        this.message = "File upload successful"
                    }
                    reader.onerror = evt => {
                        this.message = console.error(evt);

                    }


                }
            },
            deletefile(file) {
                this.files.splice(file, 1); // splice the files array by passed index value
            },

        }

       

};
</script>

<style scoped>
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#tags {
  margin-top: 300px;
  display: block;
}

#scan {
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
}
</style>
