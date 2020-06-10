<template>
    <div class="page page-index">
        <v-cell
            title="首页"
            is-link
            :to="{ name: 'home' }"
        ></v-cell>
    </div>
</template>

<script>
    import { vCell } from 'comb-ui';

    export default {
        name: "home",
        components: { vCell },
        data () {
            return {
            };
        },
        mounted () {
            console.log('page.index.mounted: ');
        },
        methods: {
        }
    };
</script>
