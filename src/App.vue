<template>
<div class="navigation">
  <nav >
    <router-link to="/">
      PersonalDetails</router-link> |
    <router-link :to="{name : 'CompanyDetails' }"> CompanyDetails</router-link> |
     <router-link :to="{name : 'EmailVerification' }"> EmailVerification</router-link>
  </nav>
  </div>
  <router-view/>
</template>

<style scoped >

.navigation{
  height:10%;
  background-color:rgb(22, 0, 81);
  color:white;
  margin:0px;
  padding:0px;
  
}
.btn{
  padding: 12px;
  font-size:12px;
  border-radius: 50%;
  background-color:white;
  color:black;
}
nav {
  padding: 20px;
  text-decoration: none !important;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none !important;
}
navigation>span, nav a:hover {
  font-weight: bold;
  color: #ffc688 !important;
  text-decoration: none !important;
}

nav a.router-link-exact-active {
  color: #ddfca3;
  text-decoration: none !important;
} 
</style>
