<nav>
    <a href="/" >home</a>
    <a href="/regles">rules</a>
    <form method="POST"  action="?/logout">
        <button style="background-color: gray">log out</button>
    </form>
    <form method="POST"  action="?/login">
        <button>log in</button>
    </form>

</nav>

<slot />