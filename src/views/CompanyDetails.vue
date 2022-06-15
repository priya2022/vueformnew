<template>
  <div class="home">

  <div id="main">
  <h1>Add your company details</h1>
  <p style="margin-top:2%">Please Fill Every details regarding your company</p>
  </div>

  <div class="box">

   <form action=""></form>

  <label for="name">Company Name</label>
  <InputText id="name" class="inputs "  v-model="state.name"  />
   <span  v-if="v$.name.$error"> {{v$.name.$errors[0].$message}}  </span>

  <label for="email">Email Id</label>
  <InputText id="email" class="inputs " v-model="state.email" />
   <span  v-if="v$.email.$error"> {{v$.email.$errors[0].$message}}  </span>

  <label for="job">Job Title</label>
  <InputText id="job" class="inputs "  v-model="state.job" />
   <span  v-if="v$.job.$error"> {{v$.job.$errors[0].$message}}  </span>

  <label for="experience">Experience</label>
  <InputText id="experience" class="inputs " v-model="state.experience" />
   <span  v-if="v$.experience.$error"> {{v$.experience.$errors[0].$message}}  </span>
  
  <br/>

  <Checkbox v-model="state.checked" :binary="true" class="inputCheckbox" @click="handleClick" />
  <span> &nbsp; &nbsp; I accept the <span style="color:orangered">Terms and Conditions</span> </span>
  <br/>
  <span  v-if="v$.checked.$error"> {{v$.checked.$errors[0].$message}}  </span>
  

  <Button class="p-button-secondary" @click="handleBack">Back</Button>
  <Button id="danger" class="p-button-danger" @click="handleOtp" >Send OTP</Button>
  </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import {reactive,computed} from 'vue'
import  {required, email, minLength,maxLength, sameAs, helpers} from '@vuelidate/validators'
// @ is an alias to /src


export default {
  name: 'CompanyDetails',
  data(){
    return{
      checked:false
    }
  },
  setup(){
    const state = reactive({
      name:'',
      email:'',
      job:'',
      experience:'',
      // checked:false,
    })

    const rules = computed(()=>{
      return{
      name:{required},
      email:{required, email},
      job:{required},
      experience:{required},
      checked:{required},
      }
    })
    const v$ = useValidate(rules,state)
    return{
      state,
      v$,
    }
  },
  
  methods:{
    handleBack(){
      this.$router.push({ name: 'PersonalDetails'})
    },
    // handleClick(){
    //   document.getElementById('danger').disabled= true;
    //   // this.v$.$validate()
    //   //   if(!checked){
    //   //     alert("Please agree to continue further")
    //   //   }else{
    //       // if(!this.v$.$error){
    //       //   document.getElementById('danger').disabled= false;
    //       // }
    //     },
   
    handleOtp(){
      this.v$.$validate()
      if(!this.v$.$error){
      this.$router.push({ name: 'EmailVerification' })
      }
      else{
        alert('Fill required Field')
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
.inputCheckbox{
  margin-left:5%;
}

h1{
  text-align:center;
}
.p-button-danger{
  width:76% !important;
  margin-left: 1%!important;
  
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

/* label{
  color:rgb(92, 92, 92);
  margin-left:5%;
} */
#main{
  margin-top:5%;
  margin-bottom:5%;
  font-size:18px;
  text-align:center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
Button{
  margin-top:4% !important;
  margin-left:5% !important;
}
</style>