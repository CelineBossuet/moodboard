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
            placeholder="Username"
            name="username"
            value={form?.username ?? ''}
            autocomplete="off"
            required
    />
    <input
            class="form-field"
            value={form?.password ?? ''}
            type="password"
            placeholder="Password"
            name="password"
    />
    <button class="form-field">
        Login
    </button>
</label>
</form>

<p>
    Don't have an account?
    <a class="link" href="/signup">Sign up</a>
</p>