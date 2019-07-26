<style src="styles/components/MainContainer.styl" lang="stylus" scoped></style>

<script>
    import MainTransition from "app/transitions/GSAP";
    import AppHeader from "app/components/AppHeader.vue";
    import BackgroundVideo from "foo/components/BackgroundVideo.vue";
    import projectComponent from "app/components/ProjectComponent.vue";
    import projectContentComponent from "app/components/projectContentComponent.vue"
    import About from "app/components/About.vue"
    import axios from 'axios'
    import isMobile from "ismobilejs";
    import {CURRENT_INDEX} from "app/store/modules/app";
import { TweenMax } from 'gsap';
    export default {
        name: "MainContainer",
        data() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                projects: [],
                index: 2,
                aboutOpened: false,
                innerProjectOpened: false,
            };
        },
        created() {
        },
        mounted() {
            App.resize.add(this.onResize);
            this.getData();
        },
        props: {},
        components: {MainTransition, AppHeader, projectComponent, About, projectContentComponent},
        methods: {
            onResize(data) {
                this.width = data.width;
                this.height = data.height;
            },
            getData() {
                axios.get('https://api.myjson.com/bins/8wsy1')
                .then((response) => {
                    console.log(response);
                    this.projects = response.data;
                    console.log("aura's data", this.projects);
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            nextProject() {
                this.innerProjectOpened = false;
                    if (!this.isPhone && !this.isTablet) {
                        if (this.index > 0) {
                            if (this.index >= 1) {
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 0, {display: 'block'});
                                TweenMax.to(this.$refs.projectImage[this.index], 0.5, {opacity: 0});
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 1.5, {opacity: 1, delay: 0.8});
                                TweenMax.fromTo(this.$refs.projectImage[this.index - 1], 1.5, {top: '100%'}, {top: '50%', ease: Power1.easeOut});
                                TweenMax.to(this.$refs.projectImage[this.index], 1.5, {top: '-20%', ease: Power1.easeOut});
                            }
                            this.$refs.project[this.index].nextProject(this.index);
                            this.index -= 1;
                            this.$store.commit(CURRENT_INDEX, this.index);
                        }
                    } else if(this.isTablet) {
                            if (this.index >= 1) {
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 0, {display: 'block'});
                                TweenMax.to(this.$refs.projectImage[this.index], 0.8, {opacity: 0});
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 0.8, {opacity: 1, delay: 0.5});
                                TweenMax.fromTo(this.$refs.projectImage[this.index - 1], 1.2, {top: '100%'}, {top: '25%', ease: Power1.easeOut});
                                TweenMax.to(this.$refs.projectImage[this.index], 1.2, {top: '-10%', ease: Power1.easeOut});
                            }
                            this.$refs.project[this.index].nextProject(this.index);
                            this.index -= 1;
                            this.$store.commit(CURRENT_INDEX, this.index);
                       } else {
                        if (this.index > 0) {
                            if (this.index >= 1) {
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 0, {display: 'block'});
                                TweenMax.to(this.$refs.projectImage[this.index], 0.8, {opacity: 0});
                                TweenMax.to(this.$refs.projectImage[this.index - 1], 0.8, {opacity: 1, delay: 0.5});
                                TweenMax.fromTo(this.$refs.projectImage[this.index - 1], 1.2, {top: '100%'}, {top: '32%', ease: Power1.easeOut});
                                TweenMax.to(this.$refs.projectImage[this.index], 1.2, {top: '-10%', ease: Power1.easeOut});
                            }
                            this.$refs.project[this.index].nextProject(this.index);
                            this.index -= 1;
                            this.$store.commit(CURRENT_INDEX, this.index);
                        }
                    }
            },
            previousProject() {
                this.innerProjectOpened = false;
                if (this.index < 2) {
                    this.$refs.project[this.index + 1].previousProject(this.index);
                    if (this.isPhone) {
                        TweenMax.to(this.$refs.projectImage[this.index], 0.5, {opacity: 0});
                        TweenMax.fromTo(this.$refs.projectImage[this.index], 1.2, {top: '32%'}, {top: '100%', ease: Power1.easeOut});
                        TweenMax.to(this.$refs.projectImage[this.index], 0, {display: 'none', delay: 0.8});
                        this.index += 1;
                        TweenMax.to(this.$refs.projectImage[this.index], 1.2, {top: '32%', ease: Power1.easeOut, delay: 0.3});
                        TweenMax.to(this.$refs.projectImage[this.index], 0.8, {opacity: 1, ease: Power1.ease, delay: 0.5});
                    } else if(this.isTablet) {
                        TweenMax.to(this.$refs.projectImage[this.index], 0.5, {opacity: 0});
                        TweenMax.fromTo(this.$refs.projectImage[this.index], 1.5, {top: '25%'}, {top: '100%', ease: Power1.easeOut});
                        TweenMax.to(this.$refs.projectImage[this.index], 0, {display: 'none', delay: 1});
                        this.index += 1;
                        TweenMax.to(this.$refs.projectImage[this.index], 1.5, {top: '25%', ease: Power1.easeOut, delay: 0.3});
                        TweenMax.to(this.$refs.projectImage[this.index], 1.5, {opacity: 1, ease: Power1.ease, delay: 1.1});
                    } else {
                        TweenMax.to(this.$refs.projectImage[this.index], 0.5, {opacity: 0});
                        TweenMax.fromTo(this.$refs.projectImage[this.index], 1.5, {top: '50%'}, {top: '100%', ease: Power1.easeOut});
                        TweenMax.to(this.$refs.projectImage[this.index], 0, {display: 'none', delay: 1});
                        this.index += 1;
                        TweenMax.to(this.$refs.projectImage[this.index], 1.5, {top: '50%', ease: Power1.easeOut, delay: 0.3});
                        TweenMax.to(this.$refs.projectImage[this.index], 1.5, {opacity: 1, ease: Power1.ease, delay: 1.1});
                    }
                    this.$store.commit(CURRENT_INDEX, this.index);
                }
            },
            onShowAbout() {
                if (this.aboutOpened) {
                    this.$refs.aboutComponent.closeAbout();
                } else {
                    this.$refs.aboutComponent.openAbout();
                }
                this.aboutOpened = !this.aboutOpened;
            },
            openProjectDetails(value) {
                this.innerProjectOpened = value;
            }
        },
        computed: {
            isPhone() {
                return isMobile.phone;
            },
            isTablet() {
                return isMobile.tablet;
            },
        }
    };
</script>

<template>
      <div class="MainContainer">
        <div class="logo">
            <h1 v-if="!isPhone">aura bravo</h1>
            <h1 v-if="isPhone">aura.</h1>
        </div>
        <div class="about-button" :class="{'about-button-actived': aboutOpened}" @click="onShowAbout">
            <h1 v-if="!isPhone">about me</h1>
            <h1 v-if="isPhone">about</h1>
            <span></span>
        </div>
        <project-component v-for="(project, index, key) of projects" :key="key" :index="index" ref="project" @onDetailsOpened="openProjectDetails" v-show="isPhone ? !aboutOpened : true"
            :id = project.id
            :color = project.mainColor
            :background = project.background
            :imageSrc = project.image
            :title = project.title
            :description = project.description
            :date = project.date
            :innerTitle = project.content.title
            :innerText = project.content.texto
            :innerImageSrc1 = project.content.images[0]
            :innerImageSrc2 = project.content.images[1]
            :innerImageSrc3 = project.content.images[2]
        ></project-component>
        <div class="project__image" v-for="(project, index, key) of projects" :key="key" :index="index" ref="projectImage" :style="{backgroundImage: 'url(' + project.image + ')', opacity: index == 2 ? 1 : 0,  backgroundSize: index === 0 ? 'contain' : 'cover',}" :class="{'project__image--slided': innerProjectOpened}"></div>
        <div class="button__next" @click="nextProject" :class="{'button__next--disabled': index == 0}"></div>
        <div class="button__previous" @click="previousProject" :class="{'button__previous--disabled': index == 2}"></div>
        <about ref="aboutComponent" @openAbout="onShowAbout"></about>
      </div>
</template>
