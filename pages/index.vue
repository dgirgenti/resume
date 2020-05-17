<template>
    <div class="container">
        <div>
            <h1 class="title">
                Dan Girgenti
            </h1>

            <section>
                <SectionHeader>
                    summary
                </SectionHeader>

                <p class="summary">
                    {{ seo.description }}
                </p>
            </section>
            
            <section>
                <SectionHeader>
                    experience
                </SectionHeader>
                
                <ul class="jobs">
                    
                    <li v-for="job in jobs" class="jobs__job">
                        <Job :job="job" />
                    </li>

                </ul>
            </section>

            <section>
                <SectionHeader>
                    education
                </SectionHeader>


            </section>            

        </div>

    </div>
</template>

<script>
import jobs from '~/assets/jobs';
import seo from '~/assets/seo';

import Job from '~/components/Job.vue';
import SectionHeader from '~/components/SectionHeader.vue';

export default {
    components: {
        Job,
        SectionHeader,
    },
    data() {
        return {
            seo: {
                title: seo.title,
                description: seo.description,
            },
            jobs,
        };
    },
    head() {
        return {
            title: this.seo.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.seo.description,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
// @media (prefers-reduced-motion: reduce) {
//   * {
//     animation-duration: 0.01ms !important;
//     animation-iteration-count: 1 !important;
//     transition-duration: 0.01ms !important;
//     scroll-behavior: auto !important;
//   }
// }


/* */

.container {
  margin: 0 auto;
  max-width: 1024px;
}

.title {
    text-align: center;
}

.subtitle {

}

/* */

* {
    transition: all 200ms;
}

body {
    color: #333;
    padding: 10px 20px;
}

.o-link {
    color: #222;

    &:hover,
    &:focus,
    &:active {
        color: #000;
        text-decoration: none;
    }
}

.jobs {
    &__job {
        &:not(:last-child) {
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
        }
    }
}
</style>
