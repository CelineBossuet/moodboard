<script>
    export let form;
</script>

<h1>You need to identify yourself before continuing</h1>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<form method="POST" action="?/auth">
<label>
    <input
            placeholder="Who are you?"
            name="username"
            value={form?.username ?? ''}
            autocomplete="off"
            required
    />
</label>
</form>