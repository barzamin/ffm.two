<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<div>
    {#if $page.data.artist}
    {:else}
        artists: <a href="{base}/backstage/auth/login">login</a> |
        <a href="{base}/backstage/auth/signup">signup</a>
    {/if}
</div>
