<template>
    <div class="container">
        <div>
            <h1 class="title">
                Dan Girgenti
            </h1>

            <section class="links">
                <a
                    href="mailto:dan.girgenti+resume@gmail.com"
                    class="o-link links__link">email</a><!--

                --><a
                    href="https://www.linkedin.com/in/dgirgenti"
                    target="_blank"
                    class="o-link links__link">linkedin</a><!--

                --><a
                    href="https://github.com/dgirgenti"
                    target="_blank"
                    class="o-link links__link">github</a>
            </section>

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

                <Job :job="education" />
            </section>

        </div>

    </div>
</template>

<script>
import education from '~/assets/education';
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
            education,
        };
    },
    head() {
        return {
            title: this.seo.title,
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Lato',
                },
            ],
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
.title {
    text-align: center;
}

.links {
    text-align: center;
    margin-bottom: 20px;

    &__link {
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        min-width: 44px;
        padding-left: 15px;
        padding-right: 15px;

        &:not(:last-child) {
            border-right: 1px solid #ddd;
        }

        &:hover,
        &:focus,
        &:active {
            box-shadow: inset 0px 0px 10px #ddd;
        }
    }
}

.summary {
    margin-bottom: 15px;
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
