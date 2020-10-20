<template>
    <div class="container">
        <div>
            <h1 class="title">
                Dan Girgenti
            </h1>

            <section class="links links--screen">
                <a
                    v-for="link in seo.links"
                    :href="link.href"
                    target="_blank"
                    class="o-link links__link">{{ link.name }}</a>
            </section>

            <section class="links links--print">
                <a
                    v-for="link in seo.links"
                    :href="link.href"
                    class="links__link links__link--print">{{ link.name }}: {{ link.print }}</a>
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
            seo,
            jobs,
            education,
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

    &--print {
        display: none;
        margin-bottom: 10px;
    }

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
            box-shadow: inset 0 0 0 4px #ddd;
        }

        &--print {
            font-size: 1rem;
            min-height: auto;
            min-width: auto;
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

@media print {
    .title {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }

    .links {
        &--print {
            display: block;
        }

        &--screen {
            display: none;
        }
    }

    .summary {
        margin-bottom: 10px;
    }
}
</style>
