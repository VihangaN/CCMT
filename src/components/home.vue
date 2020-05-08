<template>
    <div>

        <input type="file" ref="myFile" @change="selectedFile"><br/>
        <label>{{message}}</label>


    </div>
</template>

<script>
    export default {
        props: ['filedata'],
        data() {
            return {
                text: '',
                message: '',
                textWithoutComment: ''
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
            }
        }
    }
</script>
