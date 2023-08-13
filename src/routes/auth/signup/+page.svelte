<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

sign up ! :D

<form>
    <div>
        <label for="name">artist name:</label>
        <input id="name" name="name" type="text" />
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
