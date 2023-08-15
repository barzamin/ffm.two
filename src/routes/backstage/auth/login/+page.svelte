<script lang="ts">
    import type { ActionData } from './$types';
    export let form: ActionData;
</script>

log in 👀

<form method="POST">
    {#if form?.missingEmail}<p class="validation-error">email required!</p>{/if}
    {#if form?.noArtist}<p class="validation-error">no artist exists with this email</p>{/if}
    {#if form?.badPassword}<p class="validation-error">password is incorrect :(</p>{/if}
    <label for="email">email:</label>
    <input name="email" id="email" type="email" value={form?.email ?? ''} />

    <label for="password">password:</label>
    <input name="password" id="password" type="password" />

    <button>log in!</button>
</form>
