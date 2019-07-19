import { TweenMax, Power2 } from 'gsap';
<style src="styles/components/ProjectComponent.styl" lang="stylus" scoped></style>

<script>
    import MainTransition from "app/transitions/GSAP";
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
                .fromTo(this.$refs.projectBackground, 0.7, {scaleY: 1}, {scaleY: 0, ease: Power2.easeOut}, 0)
            },
            nextProject() {
                console.log();
                this.projectTimeline.play();
            },
            previousProject() {
                console.log();
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
            <div class="main-container">
                <div class="project__background" :style="{backgroundImage: 'url(' + background + ')', clipPath: 'url(' + '#mask' + index + ')'}">
                    <span :style="{backgroundColor: color, opacity: color == '#323232' ? 0 : 0.9}"></span>
                </div>
                <div class="project__description" ref="projectDescription">
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
