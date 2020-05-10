<template>
    <div>

        <!-- <input type="file" ref="myFile" @change="selectedFile"><br/> -->


        <b-field class="centered">
            <b-upload v-model="files"
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
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
             <label>{{message}}</label>
        </b-field>

         <div class="tags" id="tags">
            <span v-for="(file, index) in files"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deletefile(index)">
                </button>
            </span>
        </div>


    </div>
</template>

<script>
    export default {
        props: ['filedata'],
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
                console.log('File uploaded');
                let file = this.$refs.myFile.files[0];
                let reader = new FileReader();
                reader.readAsText(file, "UTF-8");
                reader.onload = evt => {
                    this.text = evt.target.result;
                    localStorage.setItem("filedata", this.text);
                    this.message = "File upload successful"
                }
                reader.onerror = evt => {
                    this.message =
                        console.error(evt);

                }
            },
             deletefile(file) {
                this.files.splice(file, 1); // splice the files array by passed index value
            }
        }

    }
</script>

<style scoped>
.centered{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}

#tags{
    margin-top:300px;
    display: block;
}
</style>
