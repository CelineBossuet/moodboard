<script>
    export let data;
</script>

<h1>Welcome to the launchpad Moodboard</h1>
<hr>

<div class="centered">
    <h1>The constellation of Feelings</h1>

    <form method="POST">
        <label>
            <input
                    placeholder="How do you feel today?"
                    name="description"
                    autocomplete="off"
            />
        </label>
    </form>

    <ul class="feelings">
        {#each data.feelings.filter((feeling) => feeling.id !== "0") as feeling (feeling.id)}
            <li>
                {feeling.description}
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

    button {
        border: none;
        background-size: 1rem 1rem;
        cursor: pointer;
        height: 100%;
        aspect-ratio: 1;
        opacity: 0.5;
        transition: opacity 0.2s;
    }
</style>
