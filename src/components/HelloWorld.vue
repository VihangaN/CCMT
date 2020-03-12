<template>
<div>
  
  <input type="file" ref="myFile" @change="selectedFile"><br/>
  <textarea v-model="text"></textarea>

</div>
</template>

<script>
export default{
  
  data() {
        return{
      text:'',
      result:''
    }
  },
  methods:{
    selectedFile() {
      console.log('selected a file');
      console.log(this.$refs.myFile.files[0]);
      let file = this.$refs.myFile.files[0];

      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.text = evt.target.result;
        this.result = this.text.split("\n");
      //  console.log(this.result);
        for(var i = 0 ; i < this.result.length; i++){
          this.result[i]=this.result[i].replace("++","aa");
          this.result[i]=this.result[i].replace("+","a");
          console.log(this.result[i]);
           if(this.result[i].match("(abstract|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)")){
             // console.log(i);
             // console.log(this.result[i].match("(abstract|boolean|break|byte|case|catch|char|class|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)")); 
           }

        const rejx = ["a","-","*","/","aa","--","==","!=",">","<",">=","<=","&&","||","!","//","^","~","<<",">>",">>>","<<<",",","->",".","::","+=","-=","*=","/=","=",">>>=","//","=","&=","%=","<<=",">>=","^="];
         for(var j = 0 ; j < rejx.length; j++){
         if(this.result[i].trim()===rejx[j]){
            //  console.log(i);
           }
         }

         const onlydigit = "\\b[\\d]+\\b";
         if(this.result[i].match(onlydigit)){
              console.log(i);
              console.log(this.result[i].match(onlydigit)); 
           }

        }
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    }
  }
}
</script>
