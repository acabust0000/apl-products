import axios from 'axios';
import Lenis from 'lenis';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { ExpoScaleEase } from "gsap/EasePack";

const lenis     = new Lenis()
window.axios    = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ExpoScaleEase)


lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

window.gsap  = gsap;
window.lenis = lenis;
window.selector = (e) => gsap.utils.selector("body")(e)

