<template>
<Toast />
 <div id="main">
  <h1>Add your Personal details</h1>
  <p style="margin-top:2%"><center>Please Fill Every details regarding your company</center> </p>
  </div>

    <div class="box">
    <label for="fullname">FullName</label>
   <InputText id="fullname" class="inputs "  v-model="state.name" />
   <span  v-if="v$.name.$error"> {{v$.name.$errors[0].$message}}  </span>

    <label for="gender"> Gender</label>
    <SelectButton v-model="state.selectedGender" class="selectInput" :options="gender" optionLabel="name"/>
    <span v-if="v$.selectedGender.$error"> {{v$.selectedGender.$errors[0].$message}}  </span>


    <label for="state">Country</label>
    <br/>
    <Dropdown :options="country" optionLabel="name" class="inputs" v-model="state.selectedCountry"/>
    <span v-if="v$.selectedCountry.$error"> {{v$.selectedCountry.$errors[0].$message}}  </span>
    <br/>

    <label for="state">State</label>
    <br/>
    <Dropdown :options="cstate" optionLabel="name" class="inputs" v-model="state.selectedState"/>
     <span v-if="v$.selectedState.$error"> {{v$.selectedState.$errors[0].$message}}  </span>
    <br/>
    <label for="contact">Phone</label>
    <br/>
    
    
     <div class="p-inputgroup">
                    <span class="p-inputgroup-addon ">
                        +91
                    </span>
      <InputNumber placeholder="ContactNumber" v-model="state.contact" class="inputContact" />
      </div>
      <span v-if="v$.contact.$error"> {{v$.contact.$errors[0].$message}}  </span>

    <Button class="p-button-warning inputs pl-10" @click="handleNext" style="text-align:center">Next</Button>
    </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import {reactive,computed} from 'vue'
import { useToast } from "primevue/usetoast";
import  {required, email, minLength,maxLength, sameAs, helpers} from '@vuelidate/validators'
const url="http://localhost:3500/person"

export default {
  name: 'App',
  data(){
    return{
       selectedCountry:'null',
      country:[
        {name:'India'},
        {name:'London'},
        {name:'America'},
        {name:'Africa'}
      ],
        selectedGender:null,
      gender:[
        {name:'Male'},
        {name:'Female'},
        {name:'other  '}
      ],
       selectedState:null,
      cstate:[
        {name:'TamilNadu'},
        {name:"Andhra Pradesh"},
        {name:'Sikkim'},
        {name:'Meghalaya'},
        {name:'Assam'},
        {name:'Gujarat'},
        {name:'Madya Pradesh'},
        {name:'Maharashtra'},
        {name:'Kerala'}
      
      ]
    }
  },
  setup(){
    const toast = useToast();
       
        // const showSuccess = () => {
        //     toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        // }
       

    const state= reactive({
      name:'',   
      contact:'',

    })

    

    const rules= computed(() => {
      return{
          name:{required},
          contact:{required, maxLength:maxLength(10)},
          selectedCountry:{required},
          selectedState:{required},
          selectedGender:{required}
      }
    })

    const v$ = useValidate(rules,state)
    return{
      state,
      v$,
    }
  },
 
  methods:{
    async handleNext(){
      this.v$.$validate()
      if(!this.v$.$error){
        
        //  const res = await axios.post(url, { name: this.name , gender : this.selectedGender, country : this.selectedCountry, state : this.selectedState, phone : this.contact})
         this.$router.push({name : 'CompanyDetails'})
      }
      else{
         const handleNext = () => {
         toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
        }
      }
    }
  }
  
}
</script>

<style >
*{
  margin:0;
  padding:0;
}
body{
  background-color:rgb(241, 239, 239);
}
.box{
  width:50%;
  padding-top:40px !important;
  margin:auto;
  padding:20px;
  background-color:white;
  margin-bottom:5%;
}


h1{
  text-align:center;
}

.inputs{
  width:90% !important;
  margin:2% 5% 5% 5% !important;
  color:black !important;
  font-weight:bold !important;
  letter-spacing:1px;
  /* margin-bottom:5%;
  margin-top:2%; */
  
}

.selectInput{
  margin-bottom:5%;
  margin-top:5%;
  margin-left:5%;
  display: flex;
}

label{
  color:rgb(92, 92, 92);
  margin-left:5%;
}
#main{
  margin-top:5%;
  margin-bottom:5%;
  font-size:18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}
.p-button-warning{
  margin-top:10px !important;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:center;

}
.p-inputgroup{
  width:90% !important;
  margin-left:5%;
  margin-bottom:5%;
}

</style>
