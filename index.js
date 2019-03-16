import './litwebcomponents/src/litcompmicroapp.js';

const litMicroApp1 = document.getElementById('litcomp1');
const litMicroApp2 = document.getElementById('litcomp2');

//Connect lit component to pub/sub pattern (get custom events from microapps)
litMicroApp1.addEventListener('value-changed', (event)=>{
    valueChanged(event.target, event.detail);
});
litMicroApp2.addEventListener('value-changed', (event)=>{
    valueChanged(event.target, event.detail);
});

//Connect lit component to pub/sub pattern (set values from pub/sub to microapps)
PubSub.subscribe('value-channel').on((value) => {
    litMicroApp1.value = value;
    litMicroApp2.value = value;
});

const valueChanged = (element, value) => {
    PubSub.publish('value-channel', value);
}

