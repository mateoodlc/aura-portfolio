<style src="styles/components/About.styl" lang="stylus" scoped></style>

<script>
	import MainTransition from "app/transitions/GSAP";
    export default{
        name: "About",
        data(){
            return {
                showAboutB: false
            };
        },
        props: {
        },
        components: {MainTransition},
        mounted() {
            this.buildAnimationTimelines();
        },
        methods: {
            openAbout() {
                this.timelineAbout.play().timeScale(1.1);;
            },
            closeAbout() {
                this.timelineAbout.reverse().timeScale(1.6);
                console.log(this.showAboutB);
            },
            buildAnimationTimelines() {
                this.timelineAbout = new TimelineMax({paused: true, delay: 0})
                .fromTo(this.$refs.aboutWave, 0.4, {scaleX: 0}, {scaleX: 1, ease: Power2.easeOut}, 0)
                .fromTo(this.$refs.aboutWave, 0.4, {transformOrigin: "right"},{transformOrigin: "left", ease: Power3.easeIn})
                .fromTo(this.$el, 0.6, {scaleX: 0}, {scaleX: 1, ease: Power2.ease}, 0.5)
                .to(this.$refs.aboutWave, 0.5, {scaleX: 0, ease: Power2.easeOut}, 1.3)
                .fromTo(this.$refs.aboutName, 0.5, {opacity: 0, marginTop: '100px'}, {opacity: 1, marginTop: 0, ease: Power4.easeOut}, 1.5)
                .fromTo(this.$refs.aboutText, 0.6, {opacity: 0, marginLeft: '50px'}, {opacity: 1, marginLeft: 0, ease: Power4.easeOut})
            }
        },
        computed: {}
    };
</script>

<template>
		<div class="About">
            <div class="about__wave" ref="aboutWave"></div>
			<div class= "body_content">
				<div class= "about__name" ref="aboutName">
					<h1>aura bravo.</h1>
					<div class="about__line"></div>
				</div>
				<div class= "about__content">
					<div class="about__text" ref="aboutText">
						<p>Industrial Designer graduated with honors Magna Cum Laude, interested in Interior and Furniture Design. With experience in Product Design, Graphic Design and Product Photography.
							<br><br>Strong skills in 3D modeling and rendering, application of Design Thinking and Innovation tools. With ease for teamwork and constantly learning about new design trends.
							<br><br>Passionate about digital media and interfaces, it´s design and development. Self-taught web developer, interested in implementing and expanding knowledge in code and Frontend development.
						</p>
						<div class="about__contact">
							<div class="about__social">
								<a href="https://www.instagram.com/samhara13/" target="_blank">
									<svg version="1.1" id="Layer_1" class="about__contact-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										width="169.063px" height="169.063px" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;"
										xml:space="preserve">
									<g>
										<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
											c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
											c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
											c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
										<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
											C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
											c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
										<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
											c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
											C135.661,29.421,132.821,28.251,129.921,28.251z"/>
									</g>
									</svg>
								</a>
								<a href="https://www.behance.net/AuraBravo" target="_blank">
									<svg version="1.1" id="Layer_1" class="about__contact-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										viewBox="0 0 310.023 310.023" style="enable-background:new 0 0 310.023 310.023;" xml:space="preserve">
										<g id="XMLID_792_">
											<path id="XMLID_793_" d="M239.741,102.348c-39.51,0-58.267,20.938-67.045,38.503c-5.865,11.738-8.088,23.385-8.93,30.63
												c-1.781-7.023-4.973-14.658-10.674-20.684c-2.858-3.021-6.118-5.416-9.761-7.179c8.122-5.45,16.12-15.527,16.12-34.078
												c0-17.188-5.884-31.373-17.015-41.021c-10.191-8.832-24.242-13.501-40.636-13.501H5c-2.762,0-5,2.239-5,5v186.042
												c0,2.761,2.238,5,5,5h96.747c0.12,0.002,0.358,0.007,0.703,0.007c0.001,0,0,0,0.001,0c4.274,0,19.349-0.579,33.906-8.027
												c12.02-6.148,26.085-18.427,29.008-42.535c2.342,10.313,7.12,22.569,16.785,32.925c13.304,14.255,32.637,21.495,57.463,21.52
												c0.358,0.017,1.283,0.053,2.673,0.053c6.268,0,22.436-0.753,37.141-7.729c18.947-8.989,28.963-25.176,28.963-46.812
												c0-2.762-2.238-5-5-5h-32.734c-1.372,0-2.686,0.53-3.63,1.526c-0.944,0.996-1.439,2.303-1.366,3.673
												c0.005,0.185,0.07,4.586-3.699,8.451c-4.064,4.168-11.372,6.371-21.131,6.371c-0.099,0-0.217,0.004-0.316,0.01
												c-0.065,0.004-0.358,0.018-0.832,0.018c-2.042,0-9.186-0.288-15.422-3.996c-6.255-3.72-9.911-9.903-10.904-18.418h91.14
												c2.511,0,4.633-1.862,4.958-4.352c0.213-1.634,4.968-40.298-17.232-65.586C280.097,109.35,262.44,102.348,239.741,102.348z
												M214.211,158.28c2.653-7.219,9.506-18.679,26.259-18.679c7.065,0,12.627,1.989,16.529,5.912c3.861,3.882,5.541,9.025,6.271,12.767
												H214.211z M52.663,168.28h49.165c1.495,0.011,14.604,0.683,14.604,20.546c0,12.991-5.367,18.907-17.402,19.177H52.663V168.28z
												M98.442,129.591H52.663V98.071l49.038-0.002c1.379,0.059,8.259,1.029,8.259,14.364C109.96,129.591,103.841,129.591,98.442,129.591
												z"/>
											<path id="XMLID_800_" d="M199.706,95.87h76.763c2.762,0,5-2.239,5-5V67.967c0-2.761-2.238-5-5-5h-76.763c-2.762,0-5,2.239-5,5
												V90.87C194.706,93.631,196.945,95.87,199.706,95.87z"/>
										</g>
									</svg>
								</a>
							</div>
							<div class="about__contact-info">
								<p>+57 3148450663</p>
								<p>bravo.aura95@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
