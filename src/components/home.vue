<template>
<div>
  
  <input type="file" ref="myFile" @change="selectedFile"><br/>
  <textarea v-model="text"></textarea>

    <table border="1">
    <tbody>
    <tr>
       <td>#</td>
       <td></td>
       <td>Nkw</td>
       <td>Nid</td>
       <td>Nop</td>
       <td>Nnv</td>
       <td>Nsl</td>
       <td>Cs</td>
     </tr>
     <tr v-for="res in cordoutput.length" :key="res">
       <td>{{res-1}}</td>
       <td>{{cordoutput[res-1]}}</td>
       <td>{{Nkw[res-1]}}</td>
       <td>{{Nid[res-1]}}</td>
       <td>{{Nop[res-1]}}</td>
       <td>{{Nnv[res-1]}}</td>
       <td>{{Nsl[res-1]}}</td>
       <td>{{Cs[res-1]}}</td>
       
     </tr>
    </tbody>
  </table>

</div>
</template>

<script>
export default{
  
  data() {
        return{
      text:'',
      result:'',
      cordoutput:'',
      Nkw:[],
      Nid:[],
      Nop:[],
      Nnv:[],
      Nsl:[],
      Cs:[]
    }
  },
  methods:{
    selectedFile() {
      console.log('selected a file');
     // console.log(this.$refs.myFile.files[0]);
      let file = this.$refs.myFile.files[0];
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {

        this.text = evt.target.result;
        this.result = this.text.split("\n");
        this.cordoutput = this.text.split("\n");
     

        for(var i = 0 ; i < this.result.length; i++){
          this.result[i]=this.result[i].replace(";"," ");  

//keywords
         const keywords = ["abstract","break","case","catch","class","continue","default","double","enum","extends","final","finally","implements","import","instanceof","interface","native","new","null","package","private","protected","public","return","static","strictfp","super","synchronized","this","throw","throws","transient","try","void","volatile"]
         var keyitmes=0;
         for(var key = 0 ; key < keywords.length; key++)
         {
           if(this.result[i].match(keywords[key]))
           {
            keyitmes = keyitmes+1
            this.Nkw[i]=keyitmes;
           }
          }
     
//operaters
      const operaters=["(?<!\\+)\\+(?![+=])","(?<!-)-(?![-=>])","\\*(?!=)","(?<!\\/)\\/(?![=/*])","%(?!=)","\\+\\+","--","==","!=","(?<![->])>(?![>=])","(?<![<])<(?![<=])","(?<!>)>=","(?<!<)<=","&&","\\|\\|","!(?!=)","(?<!\\|)\\|((?![|=]))","\\^(?!=)","~","(?<![<])<<(?![<=])","(?<![>])>>(?![>=])",">>>(?!=)","<<<","(?<![-+!%^&*<>=:/|~^.]),(?![-+!%^&*<>=:/|~^.])","->","::","\\+=","-=","\\*=","\\/=","(?<!>)>>>=","\\|=","&=","%=","(?<!<)<<=","(?<!>)>>=","\\^=","(?<![!=<^%&|/*+>-])=(?!=)"]
      var operitem=0;
       var splitBySpace = this.result[i].split(" ");
       
       for(var index = 0 ; index < splitBySpace.length; index++){
         
         for(var operater = 0 ; operater < operaters.length;operater++){
           
           if(splitBySpace[index].match(operaters[operater])){
            operitem = operitem+1;
            this.Nop[i]=operitem;
           }

           
    
           /* 
           if(splitBySpace[index].search(".")){
          var splitbyDot = splitBySpace[index].split(".");
            for(var split=0;split < splitbyDot.length;split++){
               console.log("splitbyDot "+splitbyDot[split]);
              if(splitbyDot[split].match("\\.")){
                operitem = operitem+1;
                this.Nop[i]=operitem;
              }
            }
           }*/
 
         }

        if(splitBySpace[index].search("\\.")){
             console.log(" spliter "+splitBySpace[index].split(".").length);
             var splitbyDot = splitBySpace[index].split(".");
             operitem = operitem +(splitbyDot.length-1);
             this.Nop[i]=operitem;
           }
       }

//digits
        
         var splitBySpace1 = this.result[i].trim().split(" ");
         var digitcunt=0;
         console.log(splitBySpace1);
       for(var index1 = 0 ; index1 < splitBySpace1.length; index1++){
         console.log(splitBySpace1[index1]);
         console.log(Number.isInteger(Number(splitBySpace1[index1])));
         if(splitBySpace1[index1]!=""){
         if(Number.isInteger(Number(splitBySpace1[index1])))
         { 
              digitcunt = digitcunt+1;
              console.log(digitcunt);
              this.Nnv[i]= digitcunt;
         }
         }
       }
   
           this.Nid.push(0);
           this.Nsl.push(0);

         //  this.Cs[i].push(this.Nkw[i]+this.Nid[i]+this.Nop[i]+this.Nnv[i]+this.Nsl[i]);
         //  console.log(this.Cs);
        }
      }
      reader.onerror = evt => {
        console.error(evt);
      }
    
    },

    getCs(){
      for(var i = 0 ; i < this.result.length; i++){
        this.Cs[i]= this.Nkw[i]+this.Nid[i]+this.Nop[i]+this.Nnv[i]+this.Nsl[i];
      }
      
    }
  }
}
</script>
