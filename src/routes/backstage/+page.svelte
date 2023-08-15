<script>
    import { page } from '$app/stores';
    import { base } from "$app/paths";
</script>

artist {$page.data.artist.name}
<form method="POST" action="{base}/backstage/auth/logout">
    <button type=submit>logout</button>
</form>
