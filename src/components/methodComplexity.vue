<template>
    <a>
        dfv
    </a>
</template>

<script>
    export default {
        name: "methodComplexity",
        components: {},

        data: () => ({
            swap: false,
            link: 'mdi-link',
            result: '',
            cordoutput: '',
            Nkw: [],
            Nid: [],
            Nop: [],
            Nnv: [],
            Nsl: [],
            Cs: []
        }),
        mounted: function () {
            if (localStorage.filedata) {
                this.result = localStorage.getItem("filedata").toString().split("\n");
                this.cordoutput = localStorage.getItem("filedata").toString().split("\n");
                this.getComplexity();
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>