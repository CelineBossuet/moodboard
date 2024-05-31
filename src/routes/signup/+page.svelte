<script>
    export let form;
</script>

<h1>Create your account</h1>

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
    <a class="link" href="/signin">Login</a>
</p>