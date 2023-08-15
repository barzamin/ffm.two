<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    import { page } from '$app/stores';
</script>

<div>
    artists: <a href="/backstage/auth/login">login</a> | <a href="/backstage/auth/signup">signup</a>
</div>

<div>
    artist: {$page.data.artist.name}
</div>
