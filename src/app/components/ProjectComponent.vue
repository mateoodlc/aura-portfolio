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
                mobileProjectTimeline: undefined,
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
            date: {type: String, required: true},
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
                if (!this.isPhone && !this.isTablet) {
                    this.projectTimeline = new TimelineMax({paused: true, delay: 0})
                        .fromTo(this.$refs.projectBackground, 0.5, {scaleY: 1}, {scaleY: 0, ease: Power3.easeIn}, 0)
                        .to(this.$refs.projectWave, 0.4, {transformOrigin: 'bottom'}, 0)
                        .to(this.$refs.projectWave, 0.5, {scaleY: 1, ease: Power3.easeIn}, 0)
                        .to(this.$refs.projectWave, 0.1, {transformOrigin: '100% 0'})
                        .to(this.$refs.projectWave, 0.4, {scaleY: 0, ease: Power3.easeIn});
                    /* this.projectDetailsTl = new TimelineMax({paused: true, delay: 0})
                        //.fromTo(this.$refs.projectBackground, 0.3, {scaleX: 1}, {scaleX: 0.7, ease: Power3.easeOut}, 0 ) */
                } else {
                    this.mobileProjectTimeline = new TimelineMax({paused: true, delay: 0})
                        .to(this.$refs.projectBackgroundBox, 0.1, {transformOrigin: 'right'})
                        .fromTo(this.$refs.projectBackgroundBox, 0.5, {scaleX: 1}, {scaleX: 0, ease: Power3.easeOut}, 0)
                }
            },
            nextProject() {
                this.projectDetailsOpened = false;
                if (!this.isPhone && !this.isTablet) {
                    this.projectTimeline.play();
                } else {
                    this.mobileProjectTimeline.play();
                }
            },
            previousProject() {
                this.projectDetailsOpened = false;
                if (!this.isPhone && !this.isTablet) {
                    this.projectTimeline.reverse();
                } else {
                    this.mobileProjectTimeline.reverse();
                }
            },
            openDetails() {
                TweenMax.to(this.$refs.showMoreButton, 0.1, {scale: 0.5, ease: Power2.ease})
                TweenMax.to(this.$refs.showMoreButton, 0.2, {scale: 1, ease: Power2.easeIn, delay: 0.1})
                this.projectDetailsOpened = !this.projectDetailsOpened;
            }
        },
        computed: {
            isPhone() {
                return isMobile.phone;
            },
            isTablet() {
                return isMobile.tablet;
            }
        },
        watch: {
            projectDetailsOpened(newValue, oldValue) {
                console.log(newValue, oldValue);
                if (this.isPhone) {
                    if (newValue) {
                        this.$nextTick(() => {
                            let dynamicHeight = this.$refs.projectContentRef.$el.offsetHeight;
                            this.$refs.projectDescription.style.height = dynamicHeight + 'px';
                        });
                    } else {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        setTimeout(() => {
                            this.$refs.projectDescription.style.height = this.$refs.projectDescriptionContainer.offsetHeight + 'px';
                        }, 100)
                    }
                }
            }
        },
        mounted() {
            this.buildProjectAnimation();
            TweenMax.to(this.$refs.showMoreButton, 0.2, {backgroundColor: this.color, ease: Power2.easeIn, delay: 1})
            if (this.isPhone) {
                setTimeout(() => {
                    this.$refs.projectDescription.style.height = this.$refs.projectDescriptionContainer.offsetHeight + 'px';
                    console.log(this.$refs.projectDescriptionContainer.offsetHeight);
                }, 100)
            }
        }
    };
</script>

<template>
<transition name="fade">
    <div class="ProjectComponent" :style="{pointerEvents: index == $store.getters.currentIndex ? 'auto' : 'none'}">
        <div class="project__wave" ref="projectWave" style="transformOrigin: bottom"></div>
        <div class="main-container">
            <div class="project__background" ref="projectBackgroundBox" :style="{backgroundImage: 'url(' + background + ')', clipPath: isPhone ? 'none' : 'url(' + '#mask' + index + ')', webkitClipPath: isPhone ? 'none' : 'url('+ '#mask' + index + ')'}">
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
                        ref="projectContentRef"
                    ></project-content-component>
                    <main-transition>
                        <div class="project__description-container" ref="projectDescriptionContainer" v-show="!projectDetailsOpened">
                            <h2>PRODUCT DESIGN</h2>
                            <h3 class="project__description-title">{{title}}</h3>
                            <p class="project__description-text">{{description}}</p>
                        </div>
                    </main-transition>
                    <button class="project__show-more--button" :class="{'button-actived': projectDetailsOpened}" @click="openDetails">
                        <p v-show="!projectDetailsOpened && !isPhone">Show Details</p>
                        <p v-show="projectDetailsOpened && !isPhone">Hide Details</p>
                        <span ref="showMoreButton"></span>
                    </button>
                </div>
            </transition>
            <transition name="date-fade">
                <div class="project__date" v-show="!isPhone && index == $store.getters.currentIndex">
                    <h3>{{date}}</h3>
                </div>
            </transition>
        </div>
        <svg width="100%" height="100vh" v-show="!isPhone && !isTablet">
            <clipPath :id="'mask'+index">
                <rect width="100%" height="100%" ref="projectBackground" style="fill:rgba(0,0,0, 0);stroke-width:3;stroke:rgba(0,0,0,0)" />
            </clipPath>
        </svg>
    </div>
    </transition>
</template>
