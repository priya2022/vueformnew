<template>

  <div id="main">
  <h1>Enter Your OTP</h1>
  <p style="margin-top:2%">For your security, we need to verifyt your identity. we sent a </p>
  <p style="margin-top:2%">5-digit code to name@domain.com. Please enter it below.</p> 
  </div>

  <div class="box">
    <p>Enter your code</p>
    <br/>
    <InputNumber v-model="state.inputNumber1"  :min="0" :max="9" class="inputbox"  />
     <span  v-if="v$.inputNumber1.$error"> {{v$.inputNumber1.$errors[0].$message}}  </span>

    <InputNumber v-model="state.inputNumber2"  :min="0" :max="9" class="inputbox"  />
    <span  v-if="v$.inputNumber2.$error"> {{v$.inputNumber2.$errors[0].$message}}  </span>

    <InputNumber v-model="state.inputNumber3"  :min="0" :max="9" class="inputbox" />
    <span  v-if="v$.inputNumber3.$error"> {{v$.inputNumber3.$errors[0].$message}}  </span>

    <InputNumber v-model="state.inputNumber4"  :min="0" :max="9" class="inputbox" />
    <span  v-if="v$.inputNumber4.$error"> {{v$.inputNumber4.$errors[0].$message}}  </span>

    <InputNumber v-model="state.inputNumber5"  :min="0" :max="9" class="inputbox" />
    <span  v-if="v$.inputNumber5.$error"> {{v$.inputNumber5.$errors[0].$message}}  </span>

    

  <br/>
      
    <Button class="p-button-secondary" @click="handleBack">Back</Button>
    <Button class="p-button-danger" @click="verify"  >Verify</Button>
    </div>
  
</template>

<script>
import useValidate from '@vuelidate/core'
import {reactive,computed} from 'vue'
import  {required, email, minLength,maxLength, sameAs, helpers} from '@vuelidate/validators'

export default {
  name: 'App',
 
 setup(){
    const state = reactive({
     inputNumber1:null,
      inputNumber2:null,
      inputNumber3:null,
      inputNumber4:null,
      inputNumber5:null,
    })

    const rules = computed(()=>{
      return{
     inputNumber1:{required,maxLength :maxLength(1)},
     inputNumber2:{required,maxLength :maxLength(1)},
     inputNumber3:{required,maxLength :maxLength(1)},
     inputNumber4:{required,maxLength :maxLength(1)},
     inputNumber5:{required,maxLength :maxLength(1)},

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
      this.$router.push({name: 'CompanyDetails'})
    },
    verify(){
      this.v$.$validate()
      if(!this.v$.$error){
        alert('Registration successfull')
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
 
.inputbox{
  max-width:60px !important;
  height:70px;
  margin-left:35px;
  display:flex ;
  flex-direction: column ;
  text-align:center;
  font-weight:bolder;
  margin-bottom:20px;
  
  
}

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
