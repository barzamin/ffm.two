<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

sign up ! :D

<form method="POST">
    {#if form?.missingName}<p class="validation-error">name required!</p>{/if}
    {#if form?.missingEmail}<p class="validation-error">email required!</p>{/if}
    {#if form?.missingPassword}<p class="validation-error">password required!</p>{/if}
    {#if form?.alreadyExists}<p class="validation-error">an account with this email already exists 🤔</p>{/if}

    <div>
        <label for="name">artist name:</label>
        <input id="name" name="name" type="text" value={form?.name ?? ''} />
    </div>

    <div>
        <label for="email">email:</label>
        <input name="email" id="email" type="email" value={form?.email ?? ''} />
    </div>

    <div>
        <label for="password">password:</label>
        <input name="password" id="password" type="password" />
    </div>
    <button>do it !!</button>
</form>
