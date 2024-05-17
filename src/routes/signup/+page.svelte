<script>
    export let form;
</script>

<form method="POST" action="?/signup">

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
            Sign up
        </button>
    </label>
</form>
<p>
    Already have an account?
    <a class="link" href="/welcome">Login</a>
</p>