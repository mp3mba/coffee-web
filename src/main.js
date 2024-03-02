import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { all } from '@awesome.me/kit-KIT_CODE'

/* add icons to the library */
library.add(faMugHot, faMugSaucer, faTrophy, faSeedling, faCartFlatbed, faHeart, faAppleWhole, faVrCardboard, faSquarePhone, faEnvelope, faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
