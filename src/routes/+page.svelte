<script>
    import { marked } from 'marked';
    export let data;
    export let form;
</script>

<h1>Welcome to the launchpad Moodboard</h1>
<hr>

<div class="centered">
    <h1>The constellation of Feelings</h1>

    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}

    <form method="POST" action="?/create">
        <label>
            <input
                    placeholder="How do you feel today?"
                    name="description"
                    value={form?.description ?? ''}
                    autocomplete="off"
                    required
            />
        </label>
    </form>

    <ul class="feelings">
        {#each data.feelings as feeling (feeling.id)}
            <li>
                {@html marked('*'+feeling.user+'* : *'+feeling.description+'*')}
            </li>
        {/each}
    </ul>
</div>

<style>
    .centered {
        max-width: 20em;
        margin: 0 auto;
    }

    label {
        width: 100%;
    }

    input {
        flex: 1;
    }

    span {
        flex: 1;
    }
</style>
