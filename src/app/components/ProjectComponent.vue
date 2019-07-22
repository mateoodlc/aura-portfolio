import { TweenMax, Power2 } from 'gsap';
<style src="styles/components/ProjectComponent.styl" lang="stylus" scoped></style>

<script>
    import MainTransition from "app/transitions/GSAP";
    import {CURRENT_INDEX} from "app/store/modules/app";
    import projectContentComponent from 'app/components/projectContentComponent.vue';
    import isMobile from "ismobilejs";
    export default{
        name: "ProjectComponent",
        data(){
            return {
                projectTimeline: undefined,
                projectDetailsTl: undefined,
                projectDetailsOpened: false,
                isMobileData: isMobile
            };
        },
        props: {
            id: {type: Number, required: true},
            color: {type: String, required: true},
            background: {type: String, required: true},
            imageSrc: {type: String, required: true},
            title: {type: String, required: true},
            description: {type: String, required: true},
            contentTitle: {type: String, required: false},
            index: {type: Number, required: true},
            innerTitle: {type: String, required: true},
            innerText: {type: String, required: true},
            innerImageSrc1: {type: String, required: true},
            innerImageSrc2: {type: String, required: true},
            innerImageSrc3: {type: String, required: true},
        },
        components: {MainTransition, projectContentComponent},
        methods: {
            buildProjectAnimation() {
                if (!this.isPhone) {
                    this.projectTimeline = new TimelineMax({paused: true, delay: 0})
                        .fromTo(this.$refs.projectBackground, 0.5, {scaleY: 1}, {scaleY: 0, ease: Power3.easeOut}, 0)
                        .to(this.$refs.projectWave, 0.4, {transformOrigin: 'bottom'}, 0)
                        .to(this.$refs.projectWave, 0.5, {scaleY: 1, ease: Power3.easeOut}, 0)
                        .to(this.$refs.projectWave, 0.1, {transformOrigin: '100% 0'})
                        .to(this.$refs.projectWave, 0.4, {scaleY: 0, ease: Power3.easeIn});
                    this.projectDetailsTl = new TimelineMax({paused: true, delay: 0})
                        //.fromTo(this.$refs.projectBackground, 0.3, {scaleX: 1}, {scaleX: 0.7, ease: Power3.easeOut}, 0)
                }
            },
            nextProject() {
                this.projectDetailsOpened = false;
                if (!this.isPhone) {
                    this.projectTimeline.play();
                }
            },
            previousProject() {
                this.projectDetailsOpened = false;
                if (!this.isPhone) {
                    this.projectTimeline.reverse();
                }
            },
            openDetails() {
                this.projectDetailsOpened = !this.projectDetailsOpened;
                if (this.projectDetailsOpened) {
                    this.projectDetailsTl.play();
                } else {
                    this.projectDetailsTl.reverse();
                }
                this.$emit('onDetailsOpened', this.projectDetailsOpened);
            }
        },
        computed: {
            isPhone() {
                return isMobile.phone;
        },
        },
        mounted() {
            this.buildProjectAnimation();
        }
    };
</script>

<template>
    <transition name="fade">
        <div class="ProjectComponent" :style="{pointerEvents: index == $store.getters.currentIndex ? 'auto' : 'none'}">
            <div class="project__wave" ref="projectWave" style="transformOrigin: bottom"></div>
            <div class="main-container">
                <div class="project__background" :style="{backgroundImage: 'url(' + background + ')', clipPath: 'url(' + '#mask' + index + ')'}">
                    <div class="project__background-number">0{{id}}</div>
                </div>
                <transition name="fade">
                    <div class="project__description" ref="projectDescription" v-show="index == $store.getters.currentIndex">
                        <project-content-component
                            :title = innerTitle
                            :text = innerText
                            :imageSrc1 = innerImageSrc1
                            :imageSrc2 = innerImageSrc2
                            :imageSrc3 = innerImageSrc3
                            :color = color
                            :index = index
                            v-show="projectDetailsOpened"
                        ></project-content-component>
                        <transition name="fade">
                            <div class="project__description-container" v-show="!projectDetailsOpened">
                                <h2>PRODUCT DESIGN</h2>
                                <h3 class="project__description-title">{{title}}</h3>
                                <p class="project__description-text">{{description}}</p>
                            </div>
                        </transition>
                        <button class="project__show-more--button" ref="showMoreButton" :class="{'button-actived': projectDetailsOpened}" @click="openDetails"></button>
                    </div>
                </transition>
            </div>
            <svg width="100%" height="100vh" v-show="!isPhone">
                <clipPath :id="'mask'+index">
                    <rect width="100%" height="100%" ref="projectBackground" style="fill:rgba(0,0,0, 0);stroke-width:3;stroke:rgba(0,0,0,0)" />
                </clipPath>
            </svg>
        </div>
    </transition>
</template>
