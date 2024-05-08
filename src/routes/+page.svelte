<script>
    import { fly } from 'svelte/transition';
    import {Button} from "flowbite-svelte";

    export let data;
    export let form;

    let emojiSets = [
        { type: "faces", minVal:128512, maxVal: 128580 },
        { type: "faces2", minVal:129296, maxVal: 129327},
        { type: "body", minVal:128066, maxVal: 128080},
        { type: "animals", minVal:129408, maxVal: 129442},
        { type: "transport", minVal:128640, maxVal: 128676},
        { type: "misc", minVal:129494, maxVal: 129535},

    ];

    let selectedSet = 0;
    // $: console.log(selectedSet)
    $: min = emojiSets[selectedSet].minVal;
    $: max = emojiSets[selectedSet].maxVal;

    // storage of emojis to make emoji keyboard
    let emojis = [];

    $: for (let i = min; i <= max; i++) {
        //console.log(String.fromCharCode(i))
        emojis = [...emojis, String.fromCodePoint(i)]
    }

    const clearEmojiMenu = () => emojis = [];

    const chooseEmojiSet = (e) => {
        selectedSet = Number(e.target.dataset.id);
        clearEmojiMenu()
    }

    // Header on emoji keyboard to select different emoji sets
    let setIcons = [128512, 129313, 128074, 129417, 128664, 129504]

    // Emoji icon to open modal of emojis
    let emojiIcon = String.fromCodePoint(128571);

    // Modal of emoji keyboard
    let modalOpen = false;

    // CHAT MESSAGE
    let textBox; // for bind:this
    let message = "";

    const addEmoji = (e) => {
        message += e.target.textContent
    }


</script>

<h1>Welcome to the launchpad Moodboard
    <form method="POST" action="?/clear">
    <button type="submit" class="btn">
        Clear the board
    </button>
    </form>
</h1>
<hr>

<div class="centered">
    <h1>The constellation of Feelings</h1>

    {#if form?.error}
        <p class="error">{form.error}</p>
    {/if}

    <section>
        <div class="chat-popup" id="myForm">

            <form method="POST" action="?/create">
                <label for="msg"><b>Message</b></label>
                <textarea placeholder="How do you feel today?"
                          name="msg"
                          required
                          bind:this={textBox}
                          bind:value={message}></textarea>

                <div id="btn-emoji-icon-cont">
                    <button type="submit" class="btn">Send</button>
                    <div id="emoji-opener-icon" on:click={() => modalOpen = true}>{emojiIcon}</div>
                </div>
            </form>

            {#if modalOpen}
                <div id="emoji-cont" transition:fly>
                    <header>
                        {#each setIcons as icon, i}
                            <div data-id={i} on:click={chooseEmojiSet}>{String.fromCodePoint(icon)}</div>
                        {/each}
                        <div id="closer-icon" on:click={() => modalOpen = false}>X</div>
                    </header>

                    {#each emojis as emoji}
                        <span on:click={addEmoji}>{emoji}</span>
                    {/each}
                </div>
            {/if}
        </div>


    </section>

    <ul class="feelings">
        {#each data.feelings as feeling (feeling.id)}
            <li>
                {feeling.user+' : '+feeling.description}
            </li>
        {/each}
    </ul>
</div>

<style>
    .centered {
        max-width: 20em;
        margin: auto;
    }
    section {
        width: 3000px;
        margin: auto;
    }

    li {
        font-size: 2rem;
        justify-content: space-between;
    }



    #btn-emoji-icon-cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #emoji-opener-icon {
        font-size: 2rem;
        cursor: pointer;
        transition: all .1s;
        padding-left: 30px;
    }

    #emoji-opener-icon:active {
        font-size: 2.3rem;
        transform: rotate(10deg);
        cursor: pointer;
    }

    #emoji-cont {
        max-width: 300px;
        max-height: 248px;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        /*margin-left: 10px;*/
        /* 		border: 1px solid gray;
                background: #ddd; */
    }

    #emoji-cont header {
        width: 98%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /*border: 1px solid gray;*/
    }

    #emoji-cont header div {
        cursor: pointer;
    }

    label {
        width: 100%;
    }


    span {
        font-size: 1.5rem;
        padding: .3rem;
        border: 1px solid gray;
        background: #eee;
        cursor: pointer;
    }

    span:active {
        background: #fff;
    }

    #closer-icon {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: right;
    }
</style>
