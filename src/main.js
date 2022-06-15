import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';



import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';


const app = createApp(App)
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button',Button)
app.component('Checkbox',Checkbox)
app.component('Dropdown',Dropdown)
app.component('SelectButton',SelectButton)
app.component('InputNumber',InputNumber)


app.use(router).mount('#app')
