<style src="styles/components/ProjectContentComponent.styl" lang="stylus" scoped></style>

<script>
    import {CURRENT_INDEX} from "app/store/modules/app";
    import MainTransition from "app/transitions/GSAP";
    export default{
        name: "ProjectContentComponent",
        data(){
            return {};
        },
        props: {
            title: {type: String, required: true},
            text: {type: String, required: true},
            imageSrc1: {type: String, required: true},
            imageSrc2: {type: String, required: true},
            imageSrc3: {type: String, required: true},
            color: {type: String, required: true},
            index: {type: Number, required: true},
        },
        components: {MainTransition},
        methods: {},
        computed: {}
    };
</script>

<template>
    <main-transition>
        <div class="ProjectContentComponent">
            <div class= "project-content__body-content">
                <div class= "project-content__info">
                    <div class="project-content__title">
                        <h1>{{title}}</h1>
                    </div>
                    <div class="project-content__text">
                        <p>{{text}}</p>
                    </div>
                    <div class="project-content__details">
                        <div class="project-content__detail one" :style="{backgroundImage: 'url('+ imageSrc1 + ')', borderColor: index === 0 ? 'none' : color}"></div>
                        <div class="project-content__detail two" :style="{backgroundImage: 'url('+ imageSrc2 + ')', borderColor: index === 0 ? 'none' : color}"></div>
                        <div class="project-content__detail three" :style="{backgroundImage: 'url('+ imageSrc3 + ')', borderColor: index === 0 ? 'none' : color}"></div>
                    </div>
                </div>
            </div>
        </div>
    </main-transition>
</template>
