import { TweenMax, Power2 } from 'gsap';
<style src="styles/components/ProjectComponent.styl" lang="stylus" scoped></style>

<script>
    import MainTransition from "app/transitions/GSAP";
    import {CURRENT_INDEX} from "app/store/modules/app";
    export default{
        name: "ProjectComponent",
        data(){
            return {
                projectTimeline: undefined,
            };
        },
        props: {
            color: {type: String, required: true},
            background: {type: String, required: true},
            imageSrc: {type: String, required: true},
            title: {type: String, required: true},
            description: {type: String, required: true},
            contentTitle: {type: String, required: false},
            index: {type: Number, required: true}
        },
        components: {MainTransition},
        methods: {
            buildProjectAnimation() {
                this.projectTimeline = new TimelineMax({paused: true, delay: 0})
                .fromTo(this.$refs.projectBackground, 0.3, {scaleY: 1}, {scaleY: 0, ease: Power3.easeOut}, 0)
                .to(this.$refs.projectWave, 0.4, {transformOrigin: 'bottom'}, 0)
                .to(this.$refs.projectWave, 0.5, {scaleY: 1, ease: Power3.easeOut}, 0)
                .to(this.$refs.projectWave, 0.1, {transformOrigin: '100% 0'})
                .to(this.$refs.projectWave, 0.4, {scaleY: 0, ease: Power3.easeIn})
            },
            nextProject() {
                this.projectTimeline.play();
            },
            previousProject() {
                this.projectTimeline.reverse();
            }
        },
        computed: {},
        mounted() {
            this.buildProjectAnimation();
        }
    };
</script>

<template>
    <main-transition>
        <div class="ProjectComponent">
            <div class="project__wave" ref="projectWave" style="transformOrigin: bottom"></div>
            <div class="main-container">
                <div class="project__background" :style="{backgroundImage: 'url(' + background + ')', clipPath: 'url(' + '#mask' + index + ')'}">
                    <span :style="{backgroundColor: color, opacity: color == '#323232' ? 0 : 0.9}"></span>
                    <div class="project__background-number">0{{index + 1}}</div>
                </div>
                <div class="project__description" ref="projectDescription" v-show="index == $store.getters.currentIndex">
                    <div class="project__description-container">
                        <h3 class="project__description-title">{{title}}</h3>
                        <p class="project__description-text">{{description}}</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <svg width="100%" height="100vh">
                <clipPath :id="'mask'+index">
                    <rect width="100%" height="100%" ref="projectBackground" style="fill:rgba(0,0,0, 0);stroke-width:3;stroke:rgba(0,0,0,0)" />
                </clipPath>
            </svg>
        </div>
    </main-transition>
</template>
