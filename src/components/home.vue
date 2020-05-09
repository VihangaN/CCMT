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
            <b-button type="is-danger"
                      @click="selectedFile"
                      icon-left="delete">
                Start Now
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                text: '',
                message: '',
                textWithoutComment: '',
                files: [] //  store multiple files
            }
        },
        methods: {
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

            checkSuccess(){

                if(this.files.length > 0){
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: 'Files uploaded successfully !',
                        position: 'is-bottom',
                        type: 'is-success'
                    })
                }
                else{
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: 'Files not uploaded successfully',
                        position: 'is-bottom',
                        type: 'is-danger'
                    })
                }

            },
        }

    }
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
