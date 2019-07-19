<style src="styles/components/MainContainer.styl" lang="stylus" scoped></style>

<script>
    import MainTransition from "app/transitions/GSAP";
    import AppHeader from "app/components/AppHeader.vue";
    import BackgroundVideo from "foo/components/BackgroundVideo.vue";
    import projectComponent from "app/components/ProjectComponent.vue";
    import axios from 'axios'
    export default {
        name: "MainContainer",
        data() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                projects: [],
                index: 2,
            };
        },
        created() {
        },
        mounted() {
            App.resize.add(this.onResize);
            this.getData();
        },
        props: {},
        components: {MainTransition, AppHeader, projectComponent},
        methods: {
            onResize(data) {
                this.width = data.width;
                this.height = data.height;
            },
            getData() {
                axios.get('https://api.myjson.com/bins/1gfra9')
                .then((response) => {
                    console.log(response);
                    this.projects = response.data;
                    console.log('auras data', this.projects);
                })
                .catch((error) => {
                    console.log(error);
                })
            },
            nextProject() {
                if (this.index > 0) {
                    this.$refs.project[this.index].nextProject(this.index);
                    this.index -= 1;
                }
            },
            previousProject() {
                if (this.index < 3) {
                    this.$refs.project[this.index + 1].previousProject(this.index);
                    this.index += 1;
                }
            }
        },
        computed: {}
    };
</script>

<template>
    <div class="MainContainer">
        <project-component v-for="(project, index, key) of projects" :key="key" :index="index" ref="project"
            :color = project.mainColor
            :background = project.background
            :imageSrc = project.image
            :title = project.title
            :description = project.description
        ></project-component>
        <div class="button__next" @click="nextProject"></div>
        <div class="button__previous" @click="previousProject"></div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
